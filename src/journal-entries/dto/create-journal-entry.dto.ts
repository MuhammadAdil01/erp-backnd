import { IsString, IsOptional, IsNumber, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateJournalEntryLineDto {
  @IsString()
  account: string;

  @IsOptional() @IsNumber()
  debit?: number;

  @IsOptional() @IsNumber()
  credit?: number;

  @IsOptional() @IsString()
  taxCode?: string;

  @IsOptional() @IsString()
  costCenter?: string;

  @IsOptional() @IsString()
  lineMemo?: string;

  @IsOptional() @IsString()
  reference?: string;
}

export class CreateJournalEntryDto {
  @IsDateString()
  postingDate: string;

  @IsOptional() @IsDateString()
  documentDate?: string;

  @IsOptional() @IsString()
  referenceNo?: string;

  @IsOptional() @IsString()
  externalDocNo?: string;

  @IsOptional() @IsString()
  generalRemarks?: string;

  @IsOptional() @IsString()
  journalType?: string;

  @IsOptional() @IsNumber()
  currencyRate?: number;

  @IsOptional() @IsNumber()
  totalDebit?: number;

  @IsOptional() @IsNumber()
  totalCredit?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateJournalEntryLineDto)
  lines?: CreateJournalEntryLineDto[];
}
