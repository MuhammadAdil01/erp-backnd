import { IsString, IsOptional, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateNextOfKinLineDto {
  @IsOptional() @IsString()
  lineId?: string;

  @IsOptional() @IsString()
  name?: string;

  @IsOptional() @IsString()
  relation?: string;

  @IsOptional() @IsString()
  contactNo?: string;
}

export class CreateNextOfKinDto {
  @IsOptional() @IsNumber()
  docEntry?: number;

  @IsOptional() @IsString()
  docNum?: string;

  @IsOptional() @IsString()
  remark?: string;

  @IsOptional() @IsString()
  employeeName?: string;

  @IsOptional() @IsNumber()
  noOfChildren?: number;

  @IsOptional() @IsNumber()
  employeeId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateNextOfKinLineDto)
  lines?: CreateNextOfKinLineDto[];
}
