import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFinalSettlementDto } from './dto/create-final-settlement.dto';
import { UpdateFinalSettlementDto } from './dto/update-final-settlement.dto';

@Injectable()
export class FinalSettlementService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateFinalSettlementDto) {
    const { lines, ...data } = dto;
    return this.prisma.finalSettlement.create({
      data: {
        ...data,
        lines: lines ? { create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  findAll() {
    return this.prisma.finalSettlement.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.finalSettlement.findUnique({ where: { id }, include: { lines: true } });
  }

  update(id: number, dto: UpdateFinalSettlementDto) {
    const { lines, ...data } = dto;
    return this.prisma.finalSettlement.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.finalSettlement.delete({ where: { id } });
  }
}
