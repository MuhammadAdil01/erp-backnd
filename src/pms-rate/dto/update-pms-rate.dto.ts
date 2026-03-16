import { PartialType } from '@nestjs/mapped-types';
import { CreatePmsRateDto } from './create-pms-rate.dto';

export class UpdatePmsRateDto extends PartialType(CreatePmsRateDto) {}
