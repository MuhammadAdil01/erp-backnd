import { Module } from '@nestjs/common';
import { BudgetSetupController } from './budget-setup.controller';
import { BudgetSetupService } from './budget-setup.service';

@Module({
  controllers: [BudgetSetupController],
  providers: [BudgetSetupService],
  exports: [BudgetSetupService],
})
export class BudgetSetupModule {}
