import { Module } from '@nestjs/common';
import { FamilyDetailsController } from './family-details.controller';
import { FamilyDetailsService } from './family-details.service';

@Module({
  controllers: [FamilyDetailsController],
  providers: [FamilyDetailsService],
  exports: [FamilyDetailsService],
})
export class FamilyDetailsModule {}
