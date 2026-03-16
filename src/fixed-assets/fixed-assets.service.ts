import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFixedAssetDto } from './dto/create-fixed-asset.dto';
import { UpdateFixedAssetDto } from './dto/update-fixed-asset.dto';

@Injectable()
export class FixedAssetsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateFixedAssetDto) {
    return this.prisma.fixedAsset.create({ data });
  }

  findAll() {
    return this.prisma.fixedAsset.findMany();
  }

  findOne(id: number) {
    return this.prisma.fixedAsset.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateFixedAssetDto) {
    return this.prisma.fixedAsset.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.fixedAsset.delete({ where: { id } });
  }
}
