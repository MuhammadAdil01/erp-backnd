import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TimeSheetsService } from './timesheets.service';
import { CreateTimeSheetDto } from './dto/create-timesheet.dto';
import { UpdateTimeSheetDto } from './dto/update-timesheet.dto';

@Controller('timesheets')
export class TimeSheetsController {
  constructor(private readonly timeSheetsService: TimeSheetsService) {}

  @Post()
  create(@Body() dto: CreateTimeSheetDto) {
    return this.timeSheetsService.create(dto);
  }

  @Get()
  findAll() {
    return this.timeSheetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.timeSheetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTimeSheetDto) {
    return this.timeSheetsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.timeSheetsService.remove(id);
  }
}
