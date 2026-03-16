import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLoanAdvanceDto } from './dto/create-loan-advance.dto';
import { UpdateLoanAdvanceDto } from './dto/update-loan-advance.dto';

@Injectable()
export class LoansAdvancesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateLoanAdvanceDto) {
    return this.prisma.loanAdvance.create({ data });
  }

  findAll() {
    return this.prisma.loanAdvance.findMany();
  }

  findOne(id: number) {
    return this.prisma.loanAdvance.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateLoanAdvanceDto) {
    return this.prisma.loanAdvance.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.loanAdvance.delete({ where: { id } });
  }
}
