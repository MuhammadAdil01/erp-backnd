import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BudgetSetupService } from './budget-setup.service';
import { CreateBudgetSetupDto } from './dto/create-budget-setup.dto';
import { UpdateBudgetSetupDto } from './dto/update-budget-setup.dto';

@Controller('budget-setup')
export class BudgetSetupController {
  constructor(private readonly budgetSetupService: BudgetSetupService) {}

  @Post()
  create(@Body() dto: CreateBudgetSetupDto) {
    return this.budgetSetupService.create(dto);
  }

  @Get()
  findAll() {
    return this.budgetSetupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.budgetSetupService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBudgetSetupDto) {
    return this.budgetSetupService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.budgetSetupService.remove(id);
  }
}
