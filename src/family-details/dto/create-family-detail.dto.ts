import { IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFamilyDetailLineDto {
  @IsOptional() @IsString()
  lineId?: string;

  @IsOptional() @IsString()
  name?: string;

  @IsOptional() @IsString()
  relation?: string;

  @IsOptional() @IsDateString()
  dob?: string;

  @IsOptional() @IsString()
  contactNo?: string;
}

export class CreateFamilyDetailDto {
  @IsOptional() @IsNumber()
  docEntry?: number;

  @IsOptional() @IsString()
  docNum?: string;

  @IsOptional() @IsString()
  creator?: string;

  @IsOptional() @IsNumber()
  noOfChildren?: number;

  @IsOptional() @IsString()
  remark?: string;

  @IsOptional() @IsString()
  employeeName?: string;

  @IsOptional() @IsNumber()
  employeeId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFamilyDetailLineDto)
  lines?: CreateFamilyDetailLineDto[];
}
