import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCostCenterDto } from './dto/create-cost-center.dto';
import { UpdateCostCenterDto } from './dto/update-cost-center.dto';

@Injectable()
export class CostAccountingService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.costCenter.findMany();
  }

  findOne(id: number) {
    return this.prisma.costCenter.findUnique({ where: { id } });
  }

  create(data: CreateCostCenterDto) {
    return this.prisma.costCenter.create({ data });
  }

  update(id: number, data: UpdateCostCenterDto) {
    return this.prisma.costCenter.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.costCenter.delete({ where: { id } });
  }
}
