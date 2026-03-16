import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateEmployeeDto) {
    return this.prisma.employee.create({ data });
  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  findByCode(employeeCode: string) {
    return this.prisma.employee.findUnique({ where: { employeeCode } });
  }

  update(id: number, data: UpdateEmployeeDto) {
    return this.prisma.employee.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.employee.delete({ where: { id } });
  }
}
