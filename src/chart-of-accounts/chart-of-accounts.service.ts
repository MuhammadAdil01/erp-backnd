import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ChartOfAccountsService {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: Prisma.ChartOfAccountCreateInput) {
        return this.prisma.chartOfAccount.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.chartOfAccount.findMany();
    }
}
