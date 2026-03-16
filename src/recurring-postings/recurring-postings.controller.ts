import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RecurringPostingsService } from './recurring-postings.service';
import { CreateRecurringPostingDto } from './dto/create-recurring-posting.dto';
import { UpdateRecurringPostingDto } from './dto/update-recurring-posting.dto';

@Controller('recurring-postings')
export class RecurringPostingsController {
  constructor(private readonly service: RecurringPostingsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateRecurringPostingDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRecurringPostingDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
