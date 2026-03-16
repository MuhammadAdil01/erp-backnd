import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PostingTemplatesService } from './posting-templates.service';
import { CreatePostingTemplateDto } from './dto/create-posting-template.dto';
import { UpdatePostingTemplateDto } from './dto/update-posting-template.dto';

@Controller('posting-templates')
export class PostingTemplatesController {
  constructor(private readonly service: PostingTemplatesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePostingTemplateDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePostingTemplateDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
