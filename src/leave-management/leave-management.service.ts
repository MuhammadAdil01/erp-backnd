import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLeaveApplicationDto } from './dto/create-leave-application.dto';
import { UpdateLeaveApplicationDto } from './dto/update-leave-application.dto';

@Injectable()
export class LeaveManagementService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateLeaveApplicationDto) {
    return this.prisma.leaveApplication.create({ data: dto });
  }

  findAll() {
    return this.prisma.leaveApplication.findMany();
  }

  findOne(id: number) {
    return this.prisma.leaveApplication.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateLeaveApplicationDto) {
    return this.prisma.leaveApplication.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.leaveApplication.delete({ where: { id } });
  }
}
