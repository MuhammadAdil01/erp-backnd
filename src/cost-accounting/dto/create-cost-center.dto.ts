import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateCostCenterDto {
  @IsString()
  costCenterCode: string;

  @IsString()
  name: string;

  @IsString()
  centerType: string;

  @IsOptional() @IsString()
  parentCenter?: string;

  @IsOptional() @IsString()
  manager?: string;

  @IsOptional() @IsString()
  functionalArea?: string;

  @IsOptional() @IsString()
  baseFactor?: string;

  @IsOptional() @IsNumber()
  allocationRate?: number;

  @IsOptional() @IsNumber()
  surcharge?: number;

  @IsOptional() @IsNumber()
  budgetCap?: number;

  @IsOptional() @IsDateString()
  effectiveDate?: string;

  @IsOptional() @IsDateString()
  expiryDate?: string;
}
