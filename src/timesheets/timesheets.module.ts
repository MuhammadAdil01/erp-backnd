import { Module } from '@nestjs/common';
import { TimeSheetsController } from './timesheets.controller';
import { TimeSheetsService } from './timesheets.service';

@Module({
  controllers: [TimeSheetsController],
  providers: [TimeSheetsService],
  exports: [TimeSheetsService],
})
export class TimeSheetsModule {}
