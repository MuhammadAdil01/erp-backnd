import { Module } from '@nestjs/common';
import { LoansAdvancesController } from './loans-advances.controller';
import { LoansAdvancesService } from './loans-advances.service';

@Module({
  controllers: [LoansAdvancesController],
  providers: [LoansAdvancesService],
  exports: [LoansAdvancesService],
})
export class LoansAdvancesModule {}
