import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostingTemplateDto } from './dto/create-posting-template.dto';
import { UpdatePostingTemplateDto } from './dto/update-posting-template.dto';

@Injectable()
export class PostingTemplatesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.postingTemplate.findMany({ include: { lines: true } });
  }

  findOne(id: number) {
    return this.prisma.postingTemplate.findUnique({
      where: { id },
      include: { lines: true },
    });
  }

  create(data: CreatePostingTemplateDto) {
    const { lines, ...rest } = data;
    return this.prisma.postingTemplate.create({
      data: {
        ...rest,
        lines: lines ? { create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  update(id: number, data: UpdatePostingTemplateDto) {
    const { lines, ...rest } = data;
    return this.prisma.postingTemplate.update({
      where: { id },
      data: {
        ...rest,
        lines: lines ? { deleteMany: {}, create: lines } : undefined,
      },
      include: { lines: true },
    });
  }

  remove(id: number) {
    return this.prisma.postingTemplate.delete({ where: { id } });
  }
}
