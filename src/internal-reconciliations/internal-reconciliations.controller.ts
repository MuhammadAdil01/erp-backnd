import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { InternalReconciliationsService } from './internal-reconciliations.service';
import { CreateInternalReconciliationDto } from './dto/create-internal-reconciliation.dto';
import { UpdateInternalReconciliationDto } from './dto/update-internal-reconciliation.dto';

@Controller('internal-reconciliations')
export class InternalReconciliationsController {
  constructor(private readonly service: InternalReconciliationsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateInternalReconciliationDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateInternalReconciliationDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
