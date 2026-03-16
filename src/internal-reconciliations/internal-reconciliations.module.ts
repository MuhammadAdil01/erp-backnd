import { Module } from '@nestjs/common';
import { InternalReconciliationsController } from './internal-reconciliations.controller';
import { InternalReconciliationsService } from './internal-reconciliations.service';

@Module({
  controllers: [InternalReconciliationsController],
  providers: [InternalReconciliationsService],
})
export class InternalReconciliationsModule {}
