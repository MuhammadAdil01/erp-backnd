import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeSheetDto } from './dto/create-timesheet.dto';
import { UpdateTimeSheetDto } from './dto/update-timesheet.dto';

@Injectable()
export class TimeSheetsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTimeSheetDto) {
    const { lines, ...data } = dto;
    return this.prisma.timeSheet.create({
      data: {
        ...data,
        lines: lines ? { create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  findAll() {
    return this.prisma.timeSheet.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.timeSheet.findUnique({ where: { id }, include: { lines: true } });
  }

  update(id: number, dto: UpdateTimeSheetDto) {
    const { lines, ...data } = dto;
    return this.prisma.timeSheet.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.timeSheet.delete({ where: { id } });
  }
}
