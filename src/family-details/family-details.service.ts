import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFamilyDetailDto } from './dto/create-family-detail.dto';
import { UpdateFamilyDetailDto } from './dto/update-family-detail.dto';

@Injectable()
export class FamilyDetailsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateFamilyDetailDto) {
    const { lines, ...data } = dto;
    return this.prisma.familyDetail.create({
      data: {
        ...data,
        lines: lines ? { create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  findAll() {
    return this.prisma.familyDetail.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.familyDetail.findUnique({ where: { id }, include: { lines: true } });
  }

  update(id: number, dto: UpdateFamilyDetailDto) {
    const { lines, ...data } = dto;
    return this.prisma.familyDetail.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.familyDetail.delete({ where: { id } });
  }
}
