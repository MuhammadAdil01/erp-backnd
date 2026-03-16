import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetSetupDto } from './create-budget-setup.dto';

export class UpdateBudgetSetupDto extends PartialType(CreateBudgetSetupDto) {}
