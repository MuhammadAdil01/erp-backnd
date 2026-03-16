import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LoansAdvancesService } from './loans-advances.service';
import { CreateLoanAdvanceDto } from './dto/create-loan-advance.dto';
import { UpdateLoanAdvanceDto } from './dto/update-loan-advance.dto';

@Controller('loans-advances')
export class LoansAdvancesController {
  constructor(private readonly loansAdvancesService: LoansAdvancesService) {}

  @Post()
  create(@Body() dto: CreateLoanAdvanceDto) {
    return this.loansAdvancesService.create(dto);
  }

  @Get()
  findAll() {
    return this.loansAdvancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loansAdvancesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLoanAdvanceDto) {
    return this.loansAdvancesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loansAdvancesService.remove(id);
  }
}
