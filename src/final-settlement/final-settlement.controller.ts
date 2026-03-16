import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FinalSettlementService } from './final-settlement.service';
import { CreateFinalSettlementDto } from './dto/create-final-settlement.dto';
import { UpdateFinalSettlementDto } from './dto/update-final-settlement.dto';

@Controller('final-settlement')
export class FinalSettlementController {
  constructor(private readonly finalSettlementService: FinalSettlementService) {}

  @Post()
  create(@Body() dto: CreateFinalSettlementDto) {
    return this.finalSettlementService.create(dto);
  }

  @Get()
  findAll() {
    return this.finalSettlementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.finalSettlementService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFinalSettlementDto) {
    return this.finalSettlementService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.finalSettlementService.remove(id);
  }
}
