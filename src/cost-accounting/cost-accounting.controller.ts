import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CostAccountingService } from './cost-accounting.service';
import { CreateCostCenterDto } from './dto/create-cost-center.dto';
import { UpdateCostCenterDto } from './dto/update-cost-center.dto';

@Controller('cost-accounting')
export class CostAccountingController {
  constructor(private readonly costAccountingService: CostAccountingService) {}

  @Get()
  findAll() {
    return this.costAccountingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.costAccountingService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCostCenterDto) {
    return this.costAccountingService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCostCenterDto) {
    return this.costAccountingService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.costAccountingService.remove(id);
  }
}
