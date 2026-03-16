import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateBudgetSetupDto {
  @IsString()
  fiscalYear: string;

  @IsString()
  department: string;

  @IsNumber()
  budgetAmount: number;

  @IsOptional() @IsString()
  currency?: string;

  @IsOptional() @IsDateString()
  allocationDate?: string;

  @IsOptional() @IsNumber()
  revisionNumber?: number;

  @IsOptional() @IsString()
  approvedBy?: string;

  @IsOptional() @IsString()
  strategicGoal?: string;

  @IsOptional() @IsString()
  priorityLevel?: string;

  @IsOptional() @IsNumber()
  utilized?: number;
}
