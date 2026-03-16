import { PartialType } from '@nestjs/mapped-types';
import { CreateLoanAdvanceDto } from './create-loan-advance.dto';

export class UpdateLoanAdvanceDto extends PartialType(CreateLoanAdvanceDto) {}
