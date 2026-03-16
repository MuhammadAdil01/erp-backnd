import { Module } from '@nestjs/common';
import { PmsRateController } from './pms-rate.controller';
import { PmsRateService } from './pms-rate.service';

@Module({
  controllers: [PmsRateController],
  providers: [PmsRateService],
})
export class PmsRateModule {}
