import { Module } from '@nestjs/common';
import { FinalSettlementController } from './final-settlement.controller';
import { FinalSettlementService } from './final-settlement.service';

@Module({
  controllers: [FinalSettlementController],
  providers: [FinalSettlementService],
  exports: [FinalSettlementService],
})
export class FinalSettlementModule {}
