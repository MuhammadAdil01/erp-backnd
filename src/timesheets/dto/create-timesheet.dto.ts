import { IsString, IsOptional, IsNumber, IsDateString, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTimeSheetLineDto {
  @IsOptional() @IsDateString()
  date?: string;

  @IsOptional() @IsString()
  startTime?: string;

  @IsOptional() @IsString()
  endTime?: string;

  @IsOptional() @IsString()
  timeSheetActivity?: string;

  @IsOptional() @IsString()
  workOrderNo?: string;

  @IsOptional() @IsString()
  financialProject?: string;

  @IsOptional() @IsString()
  costCenter?: string;

  @IsOptional() @IsString()
  stage?: string;

  @IsOptional() @IsString()
  labourItem?: string;

  @IsOptional() @IsString()
  serviceCallNo?: string;

  @IsOptional() @IsBoolean()
  billable?: boolean;
}

export class CreateTimeSheetDto {
  @IsString()
  tsType: string;

  @IsOptional() @IsString()
  code?: string;

  @IsOptional() @IsString()
  name?: string;

  @IsOptional() @IsString()
  firstName?: string;

  @IsOptional() @IsString()
  department?: string;

  @IsOptional() @IsNumber()
  tsNo?: number;

  @IsOptional() @IsDateString()
  dateFrom?: string;

  @IsOptional() @IsDateString()
  dateTo?: string;

  @IsOptional() @IsNumber()
  employeeId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTimeSheetLineDto)
  lines?: CreateTimeSheetLineDto[];
}
