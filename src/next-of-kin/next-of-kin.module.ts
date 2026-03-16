import { Module } from '@nestjs/common';
import { NextOfKinController } from './next-of-kin.controller';
import { NextOfKinService } from './next-of-kin.service';

@Module({
  controllers: [NextOfKinController],
  providers: [NextOfKinService],
  exports: [NextOfKinService],
})
export class NextOfKinModule {}
