import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreatePmsRateDto {
  @IsString()
  targetProperty: string;

  @IsString()
  fiscalPeriod: string;

  @IsOptional() @IsDateString()
  effectiveDate?: string;

  @IsOptional() @IsNumber()
  standardRackRate?: number;

  @IsOptional() @IsNumber()
  corporateNegotiatedRate?: number;

  @IsOptional() @IsNumber()
  longTermLeaseRate?: number;

  @IsOptional() @IsNumber()
  dailyOperationalCost?: number;

  @IsOptional() @IsNumber()
  serviceChargeFixed?: number;

  @IsOptional() @IsNumber()
  municipalityFee?: number;

  @IsOptional() @IsNumber()
  seasonalPeakMarkup?: number;

  @IsOptional() @IsNumber()
  occupancyRate?: number;

  @IsOptional() @IsNumber()
  avgDailyRate?: number;

  @IsOptional() @IsNumber()
  revparIndex?: number;

  @IsOptional() @IsNumber()
  taxVariance?: number;
}
