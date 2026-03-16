import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBudgetSetupDto } from './dto/create-budget-setup.dto';
import { UpdateBudgetSetupDto } from './dto/update-budget-setup.dto';

@Injectable()
export class BudgetSetupService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateBudgetSetupDto) {
    return this.prisma.budgetSetup.create({ data });
  }

  findAll() {
    return this.prisma.budgetSetup.findMany();
  }

  findOne(id: number) {
    return this.prisma.budgetSetup.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateBudgetSetupDto) {
    return this.prisma.budgetSetup.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.budgetSetup.delete({ where: { id } });
  }
}
