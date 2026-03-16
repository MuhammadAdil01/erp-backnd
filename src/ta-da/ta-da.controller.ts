import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TaDaService } from './ta-da.service';
import { CreateTaDaDto } from './dto/create-ta-da.dto';
import { UpdateTaDaDto } from './dto/update-ta-da.dto';

@Controller('ta-da')
export class TaDaController {
  constructor(private readonly taDaService: TaDaService) {}

  @Post()
  create(@Body() dto: CreateTaDaDto) {
    return this.taDaService.create(dto);
  }

  @Get()
  findAll() {
    return this.taDaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taDaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTaDaDto) {
    return this.taDaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.taDaService.remove(id);
  }
}
