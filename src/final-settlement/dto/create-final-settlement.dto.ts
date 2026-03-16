import { IsString, IsOptional, IsNumber, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFinalSettlementLineDto {
  @IsOptional() @IsNumber()
  logInst?: number;

  @IsOptional() @IsDateString()
  joiningDate?: string;

  @IsOptional() @IsNumber()
  grossSalary?: number;

  @IsOptional() @IsNumber()
  yearsOfService?: number;

  @IsOptional() @IsNumber()
  gratuity?: number;
}

export class CreateFinalSettlementDto {
  @IsOptional() @IsNumber()
  docEntry?: number;

  @IsOptional() @IsString()
  docNum?: string;

  @IsOptional() @IsDateString()
  createDate?: string;

  @IsOptional() @IsString()
  remark?: string;

  @IsOptional() @IsString()
  employeeName?: string;

  @IsOptional() @IsString()
  status?: string;

  @IsOptional() @IsString()
  creator?: string;

  @IsOptional() @IsString()
  employeeCode?: string;

  @IsOptional() @IsString()
  dhgabNo?: string;

  @IsOptional() @IsString()
  grade?: string;

  @IsOptional() @IsString()
  stage?: string;

  @IsOptional() @IsNumber()
  employeeId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFinalSettlementLineDto)
  lines?: CreateFinalSettlementLineDto[];
}
