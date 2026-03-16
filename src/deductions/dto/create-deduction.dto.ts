import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateDeductionDto {
  @IsString()
  deductionType: string;

  @IsNumber()
  adjustmentAmount: number;

  @IsOptional() @IsString()
  approvalReference?: string;

  @IsOptional() @IsDateString()
  date?: string;

  @IsOptional() @IsString()
  status?: string;

  @IsOptional() @IsNumber()
  employeeId?: number;
}
