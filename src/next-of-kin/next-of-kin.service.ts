import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNextOfKinDto } from './dto/create-next-of-kin.dto';
import { UpdateNextOfKinDto } from './dto/update-next-of-kin.dto';

@Injectable()
export class NextOfKinService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateNextOfKinDto) {
    const { lines, ...data } = dto;
    return this.prisma.nextOfKin.create({
      data: {
        ...data,
        lines: lines ? { create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  findAll() {
    return this.prisma.nextOfKin.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.nextOfKin.findUnique({ where: { id }, include: { lines: true } });
  }

  update(id: number, dto: UpdateNextOfKinDto) {
    const { lines, ...data } = dto;
    return this.prisma.nextOfKin.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.nextOfKin.delete({ where: { id } });
  }
}
