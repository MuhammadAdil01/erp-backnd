import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateChartOfAccountDto {
  @IsString()
  accountCode: string;

  @IsString()
  accountName: string;

  @IsString()
  accountType: string;

  @IsString()
  category: string;

  @IsString()
  subCategory: string;

  @IsString()
  currency: string;

  @IsOptional() @IsNumber()
  openingBalance?: number;

  @IsOptional() @IsNumber()
  targetBalance?: number;

  @IsOptional() @IsString()
  taxGroup?: string;

  @IsOptional() @IsString()
  referenceNo?: string;

  @IsOptional() @IsString()
  integrationKey?: string;

  @IsOptional() @IsString()
  reportingGroup?: string;

  @IsOptional() @IsString()
  description?: string;
}
