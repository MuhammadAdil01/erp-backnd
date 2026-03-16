import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChartOfAccountDto } from './dto/create-chart-of-account.dto';
import { UpdateChartOfAccountDto } from './dto/update-chart-of-account.dto';

@Injectable()
export class ChartOfAccountsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateChartOfAccountDto) {
    return this.prisma.chartOfAccount.create({ data });
  }

  findAll() {
    return this.prisma.chartOfAccount.findMany();
  }

  findOne(id: number) {
    return this.prisma.chartOfAccount.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateChartOfAccountDto) {
    return this.prisma.chartOfAccount.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.chartOfAccount.delete({ where: { id } });
  }
}
