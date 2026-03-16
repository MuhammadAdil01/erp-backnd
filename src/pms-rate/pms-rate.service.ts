import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePmsRateDto } from './dto/create-pms-rate.dto';
import { UpdatePmsRateDto } from './dto/update-pms-rate.dto';

@Injectable()
export class PmsRateService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.pmsRate.findMany();
  }

  findOne(id: number) {
    return this.prisma.pmsRate.findUnique({ where: { id } });
  }

  create(data: CreatePmsRateDto) {
    return this.prisma.pmsRate.create({ data });
  }

  update(id: number, data: UpdatePmsRateDto) {
    return this.prisma.pmsRate.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.pmsRate.delete({ where: { id } });
  }
}
