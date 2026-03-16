import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaDaDto } from './dto/create-ta-da.dto';
import { UpdateTaDaDto } from './dto/update-ta-da.dto';

@Injectable()
export class TaDaService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTaDaDto) {
    const { lines, ...data } = dto;
    return this.prisma.taDa.create({
      data: {
        ...data,
        lines: lines ? { create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  findAll() {
    return this.prisma.taDa.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.taDa.findUnique({ where: { id }, include: { lines: true } });
  }

  update(id: number, dto: UpdateTaDaDto) {
    const { lines, ...data } = dto;
    return this.prisma.taDa.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.taDa.delete({ where: { id } });
  }
}
