import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PmsRateService } from './pms-rate.service';
import { CreatePmsRateDto } from './dto/create-pms-rate.dto';
import { UpdatePmsRateDto } from './dto/update-pms-rate.dto';

@Controller('pms-rate')
export class PmsRateController {
  constructor(private readonly pmsRateService: PmsRateService) {}

  @Get()
  findAll() {
    return this.pmsRateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pmsRateService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePmsRateDto) {
    return this.pmsRateService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePmsRateDto) {
    return this.pmsRateService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pmsRateService.remove(id);
  }
}
