import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateLoanAdvanceDto {
  @IsString()
  supportCategory: string;

  @IsNumber()
  principalAmount: number;

  @IsOptional() @IsNumber()
  repaymentTenure?: number;

  @IsOptional() @IsNumber()
  interestRate?: number;

  @IsOptional() @IsNumber()
  monthlyInstallment?: number;

  @IsOptional() @IsString()
  justification?: string;

  @IsOptional() @IsNumber()
  outstandingBalance?: number;

  @IsOptional() @IsNumber()
  totalInstallmentsPaid?: number;

  @IsOptional() @IsNumber()
  remainingTenure?: number;

  @IsOptional() @IsDateString()
  endDate?: string;

  @IsOptional() @IsString()
  status?: string;

  @IsOptional() @IsNumber()
  employeeId?: number;
}
