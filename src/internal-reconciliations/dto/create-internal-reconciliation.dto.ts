import { IsString, IsOptional, IsNumber, IsDateString, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReconciliationItemDto {
  @IsOptional() @IsDateString()
  date?: string;

  @IsOptional() @IsString()
  reference?: string;

  @IsOptional() @IsNumber()
  amount?: number;

  @IsString()
  side: string;

  @IsOptional() @IsBoolean()
  selected?: boolean;

  @IsOptional() @IsString()
  type?: string;
}

export class CreateInternalReconciliationDto {
  @IsString()
  sourceAccount: string;

  @IsString()
  targetAccount: string;

  @IsOptional() @IsString()
  status?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateReconciliationItemDto)
  items?: CreateReconciliationItemDto[];
}
