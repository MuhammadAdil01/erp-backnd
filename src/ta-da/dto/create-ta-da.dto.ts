import { IsString, IsOptional, IsNumber, IsDateString, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaDaLineDto {
  @IsOptional() @IsDateString()
  date?: string;

  @IsOptional() @IsString()
  expenseType?: string;

  @IsOptional() @IsNumber()
  amount?: number;

  @IsOptional() @IsBoolean()
  bill?: boolean;
}

export class CreateTaDaDto {
  @IsOptional() @IsNumber()
  docEntry?: number;

  @IsOptional() @IsString()
  docNum?: string;

  @IsOptional() @IsString()
  status?: string;

  @IsOptional() @IsString()
  creator?: string;

  @IsOptional() @IsDateString()
  createDate?: string;

  @IsOptional() @IsString()
  remark?: string;

  @IsOptional() @IsString()
  employeeName?: string;

  @IsOptional() @IsString()
  designation?: string;

  @IsOptional() @IsString()
  grade?: string;

  @IsOptional() @IsString()
  location?: string;

  @IsOptional() @IsString()
  toLocation?: string;

  @IsOptional() @IsString()
  fromLocation?: string;

  @IsOptional() @IsString()
  reasonOfTravel?: string;

  @IsOptional() @IsString()
  phone?: string;

  @IsOptional() @IsString()
  department?: string;

  @IsOptional() @IsString()
  dhgabNo?: string;

  @IsOptional() @IsNumber()
  employeeId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTaDaLineDto)
  lines?: CreateTaDaLineDto[];
}
