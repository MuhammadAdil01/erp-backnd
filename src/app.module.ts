import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

// HR Modules
import { EmployeesModule } from './employees/employees.module';
import { TimeSheetsModule } from './timesheets/timesheets.module';
import { FamilyDetailsModule } from './family-details/family-details.module';
import { FinalSettlementModule } from './final-settlement/final-settlement.module';
import { NextOfKinModule } from './next-of-kin/next-of-kin.module';
import { LeaveManagementModule } from './leave-management/leave-management.module';
import { TaDaModule } from './ta-da/ta-da.module';
import { DeductionsModule } from './deductions/deductions.module';
import { LoansAdvancesModule } from './loans-advances/loans-advances.module';

// Financial Modules
import { ChartOfAccountsModule } from './chart-of-accounts/chart-of-accounts.module';
import { JournalEntriesModule } from './journal-entries/journal-entries.module';
import { BudgetSetupModule } from './budget-setup/budget-setup.module';
import { FixedAssetsModule } from './fixed-assets/fixed-assets.module';
import { CostAccountingModule } from './cost-accounting/cost-accounting.module';
import { PostingTemplatesModule } from './posting-templates/posting-templates.module';
import { RecurringPostingsModule } from './recurring-postings/recurring-postings.module';
import { InternalReconciliationsModule } from './internal-reconciliations/internal-reconciliations.module';
import { PmsRateModule } from './pms-rate/pms-rate.module';

@Module({
  imports: [
    PrismaModule,

    // HR
    EmployeesModule,
    TimeSheetsModule,
    FamilyDetailsModule,
    FinalSettlementModule,
    NextOfKinModule,
    LeaveManagementModule,
    TaDaModule,
    DeductionsModule,
    LoansAdvancesModule,

    // Financial
    ChartOfAccountsModule,
    JournalEntriesModule,
    BudgetSetupModule,
    FixedAssetsModule,
    CostAccountingModule,
    PostingTemplatesModule,
    RecurringPostingsModule,
    InternalReconciliationsModule,
    PmsRateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
