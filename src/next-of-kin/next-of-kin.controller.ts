import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { NextOfKinService } from './next-of-kin.service';
import { CreateNextOfKinDto } from './dto/create-next-of-kin.dto';
import { UpdateNextOfKinDto } from './dto/update-next-of-kin.dto';

@Controller('next-of-kin')
export class NextOfKinController {
  constructor(private readonly nextOfKinService: NextOfKinService) {}

  @Post()
  create(@Body() dto: CreateNextOfKinDto) {
    return this.nextOfKinService.create(dto);
  }

  @Get()
  findAll() {
    return this.nextOfKinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.nextOfKinService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateNextOfKinDto) {
    return this.nextOfKinService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.nextOfKinService.remove(id);
  }
}
