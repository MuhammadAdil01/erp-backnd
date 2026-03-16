import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInternalReconciliationDto } from './dto/create-internal-reconciliation.dto';
import { UpdateInternalReconciliationDto } from './dto/update-internal-reconciliation.dto';

@Injectable()
export class InternalReconciliationsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.internalReconciliation.findMany({ include: { items: true } });
  }

  findOne(id: number) {
    return this.prisma.internalReconciliation.findUnique({
      where: { id },
      include: { items: true },
    });
  }

  create(data: CreateInternalReconciliationDto) {
    const { items, ...rest } = data;
    return this.prisma.internalReconciliation.create({
      data: {
        ...rest,
        items: items ? { create: items } : undefined,
      },
      include: { items: true },
    });
  }

  update(id: number, data: UpdateInternalReconciliationDto) {
    const { items, ...rest } = data;
    return this.prisma.internalReconciliation.update({
      where: { id },
      data: {
        ...rest,
        items: items ? { deleteMany: {}, create: items } : undefined,
      },
      include: { items: true },
    });
  }

  remove(id: number) {
    return this.prisma.internalReconciliation.delete({ where: { id } });
  }
}
