import { IsString, IsOptional, IsBoolean, IsNumber, IsEmail } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  employeeCode: string;

  @IsString()
  firstName: string;

  @IsOptional() @IsString()
  middleName?: string;

  @IsString()
  lastName: string;

  @IsOptional() @IsString()
  fatherName?: string;

  @IsOptional() @IsString()
  jobTitle?: string;

  @IsOptional() @IsString()
  position?: string;

  @IsOptional() @IsString()
  section?: string;

  @IsOptional() @IsString()
  branch?: string;

  @IsOptional() @IsString()
  manager?: string;

  @IsOptional() @IsString()
  officePhone?: string;

  @IsOptional() @IsString()
  extension?: string;

  @IsOptional() @IsString()
  mobilePhone?: string;

  @IsOptional() @IsString()
  homePhone?: string;

  @IsOptional() @IsString()
  cnic?: string;

  @IsOptional() @IsEmail()
  email?: string;

  @IsOptional() @IsString()
  dhgabNo?: string;

  @IsOptional() @IsString()
  idNo?: string;

  @IsOptional() @IsString()
  externalEmployeeNo?: string;

  // Address
  @IsOptional() @IsString()
  temporaryAddress?: string;

  @IsOptional() @IsString()
  permanentAddress?: string;

  @IsOptional() @IsString()
  district?: string;

  @IsOptional() @IsString()
  city?: string;

  @IsOptional() @IsString()
  zipCode?: string;

  @IsOptional() @IsString()
  county?: string;

  @IsOptional() @IsString()
  country?: string;

  @IsOptional() @IsString()
  state?: string;

  @IsOptional() @IsString()
  building?: string;

  // Bank
  @IsOptional() @IsString()
  bank?: string;

  @IsOptional() @IsString()
  accountNumber?: string;

  @IsOptional() @IsString()
  bankBranch?: string;

  // Compensation
  @IsOptional() @IsString()
  employeeType?: string;

  @IsOptional() @IsString()
  grade?: string;

  @IsOptional() @IsString()
  stage?: string;

  @IsOptional() @IsNumber()
  employeeCosts?: number;

  @IsOptional() @IsBoolean()
  gratuity?: boolean;

  @IsOptional() @IsBoolean()
  providentFund?: boolean;

  @IsOptional() @IsBoolean()
  eobi?: boolean;

  @IsOptional() @IsNumber()
  openingTaxableAmount?: number;

  @IsOptional() @IsNumber()
  taxPaid?: number;

  @IsOptional() @IsNumber()
  fuelLiters?: number;

  // Allowances
  @IsOptional() @IsNumber()
  entertainmentAllowance?: number;

  @IsOptional() @IsNumber()
  educationAllowance?: number;

  @IsOptional() @IsNumber()
  bigCityAllowance?: number;

  @IsOptional() @IsNumber()
  healthInsuranceAllocatedAmount?: number;

  // Deductions
  @IsOptional() @IsNumber()
  healthInsuranceDeduction?: number;

  @IsOptional() @IsNumber()
  messDeduction?: number;

  // Shift
  @IsOptional() @IsBoolean()
  overTime?: boolean;

  @IsOptional() @IsNumber()
  otLimitStart?: number;

  @IsOptional() @IsNumber()
  overtimeLimit?: number;

  @IsOptional() @IsString()
  shift?: string;

  @IsOptional() @IsNumber()
  timeInRelaxation?: number;

  @IsOptional() @IsNumber()
  timeOutRelaxation?: number;

  @IsOptional() @IsNumber()
  timeInRelax?: number;

  @IsOptional() @IsNumber()
  timeOutRelax?: number;

  @IsOptional() @IsBoolean()
  absentApplication?: boolean;

  @IsOptional() @IsNumber()
  lateInApplication?: number;

  @IsOptional() @IsNumber()
  lateOutApplication?: number;
}
