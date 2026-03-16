import { Module } from '@nestjs/common';
import { RecurringPostingsController } from './recurring-postings.controller';
import { RecurringPostingsService } from './recurring-postings.service';

@Module({
  controllers: [RecurringPostingsController],
  providers: [RecurringPostingsService],
})
export class RecurringPostingsModule {}
