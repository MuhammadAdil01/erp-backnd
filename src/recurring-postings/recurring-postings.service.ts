import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecurringPostingDto } from './dto/create-recurring-posting.dto';
import { UpdateRecurringPostingDto } from './dto/update-recurring-posting.dto';

@Injectable()
export class RecurringPostingsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.recurringPosting.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.recurringPosting.findUnique({
      where: { id },
      include: { lines: true },
    });
  }

  create(data: CreateRecurringPostingDto) {
    const { lines, ...rest } = data;
    return this.prisma.recurringPosting.create({
      data: {
        ...rest,
        lines: lines ? { create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  update(id: number, data: UpdateRecurringPostingDto) {
    const { lines, ...rest } = data;
    return this.prisma.recurringPosting.update({
      where: { id },
      data: {
        ...rest,
        lines: lines ? { deleteMany: {}, create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  remove(id: number) {
    return this.prisma.recurringPosting.delete({ where: { id } });
  }
}
