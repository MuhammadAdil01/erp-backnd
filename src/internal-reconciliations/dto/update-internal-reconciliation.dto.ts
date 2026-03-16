import { PartialType } from '@nestjs/mapped-types';
import { CreateInternalReconciliationDto } from './create-internal-reconciliation.dto';

export class UpdateInternalReconciliationDto extends PartialType(CreateInternalReconciliationDto) {}
