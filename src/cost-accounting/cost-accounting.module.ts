import { Module } from '@nestjs/common';
import { CostAccountingController } from './cost-accounting.controller';
import { CostAccountingService } from './cost-accounting.service';

@Module({
  controllers: [CostAccountingController],
  providers: [CostAccountingService],
})
export class CostAccountingModule {}
