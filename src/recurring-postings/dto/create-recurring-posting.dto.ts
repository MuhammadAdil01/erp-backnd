import { IsString, IsOptional, IsNumber, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRecurringPostingLineDto {
  @IsString()
  glAccount: string;

  @IsOptional() @IsNumber()
  debitAmount?: number;

  @IsOptional() @IsNumber()
  creditAmount?: number;

  @IsOptional() @IsString()
  lineMemo?: string;
}

export class CreateRecurringPostingDto {
  @IsString()
  agreementCode: string;

  @IsString()
  recurrenceFrequency: string;

  @IsDateString()
  startDate: string;

  @IsOptional() @IsDateString()
  nextExecution?: string;

  @IsOptional() @IsDateString()
  endDate?: string;

  @IsOptional() @IsString()
  transactionMode?: string;

  @IsOptional() @IsString()
  status?: string;

  @IsOptional() @IsNumber()
  totalExecutions?: number;

  @IsOptional() @IsDateString()
  lastSuccessfulRun?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecurringPostingLineDto)
  lines?: CreateRecurringPostingLineDto[];
}
