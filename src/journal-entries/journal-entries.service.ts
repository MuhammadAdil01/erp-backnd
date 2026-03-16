import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJournalEntryDto } from './dto/create-journal-entry.dto';
import { UpdateJournalEntryDto } from './dto/update-journal-entry.dto';

@Injectable()
export class JournalEntriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateJournalEntryDto) {
    const { lines, ...rest } = data;

    const totalDebit = lines?.reduce((sum, line) => sum + (line.debit ?? 0), 0) ?? 0;
    const totalCredit = lines?.reduce((sum, line) => sum + (line.credit ?? 0), 0) ?? 0;

    return this.prisma.journalEntry.create({
      data: {
        ...rest,
        totalDebit,
        totalCredit,
        lines: lines?.length
          ? { create: lines }
          : undefined,
      },
      include: { lines: true },
    });
  }

  findAll() {
    return this.prisma.journalEntry.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.journalEntry.findUnique({ where: { id }, include: { lines: true } });
  }

  update(id: number, data: UpdateJournalEntryDto) {
    const { lines, ...rest } = data;

    return this.prisma.journalEntry.update({
      where: { id },
      data: {
        ...rest,
        lines: lines?.length
          ? { deleteMany: {}, create: lines }
          : undefined,
      },
      include: { lines: true },
    });
  }

  remove(id: number) {
    return this.prisma.journalEntry.delete({ where: { id } });
  }
}
