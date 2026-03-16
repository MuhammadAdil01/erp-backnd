import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeductionDto } from './dto/create-deduction.dto';
import { UpdateDeductionDto } from './dto/update-deduction.dto';

@Injectable()
export class DeductionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateDeductionDto) {
    return this.prisma.deduction.create({ data: dto });
  }

  findAll() {
    return this.prisma.deduction.findMany();
  }

  findOne(id: number) {
    return this.prisma.deduction.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateDeductionDto) {
    return this.prisma.deduction.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.deduction.delete({ where: { id } });
  }
}
