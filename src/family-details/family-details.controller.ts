import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FamilyDetailsService } from './family-details.service';
import { CreateFamilyDetailDto } from './dto/create-family-detail.dto';
import { UpdateFamilyDetailDto } from './dto/update-family-detail.dto';

@Controller('family-details')
export class FamilyDetailsController {
  constructor(private readonly familyDetailsService: FamilyDetailsService) {}

  @Post()
  create(@Body() dto: CreateFamilyDetailDto) {
    return this.familyDetailsService.create(dto);
  }

  @Get()
  findAll() {
    return this.familyDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.familyDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFamilyDetailDto) {
    return this.familyDetailsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.familyDetailsService.remove(id);
  }
}
