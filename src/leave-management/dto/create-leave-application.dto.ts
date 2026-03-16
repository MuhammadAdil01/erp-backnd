import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateLeaveApplicationDto {
  @IsString()
  leaveType: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsOptional() @IsString()
  reason?: string;

  @IsOptional() @IsNumber()
  totalDays?: number;

  @IsOptional() @IsString()
  status?: string;

  @IsOptional() @IsNumber()
  employeeId?: number;
}
