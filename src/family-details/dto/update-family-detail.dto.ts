import { PartialType } from '@nestjs/mapped-types';
import { CreateFamilyDetailDto } from './create-family-detail.dto';

export class UpdateFamilyDetailDto extends PartialType(CreateFamilyDetailDto) {}
