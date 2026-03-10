import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChartOfAccountsService } from './chart-of-accounts.service';
import { Prisma } from '@prisma/client';

@Controller('chart-of-accounts')
export class ChartOfAccountsController {
    constructor(private readonly chartOfAccountsService: ChartOfAccountsService) { }

    @Post()
    async create(@Body() createData: Prisma.ChartOfAccountCreateInput) {
        return this.chartOfAccountsService.create(createData);
    }

    @Get()
    async findAll() {
        return this.chartOfAccountsService.findAll();
    }
}
