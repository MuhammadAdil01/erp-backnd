import { Module } from '@nestjs/common';
import { TaDaController } from './ta-da.controller';
import { TaDaService } from './ta-da.service';

@Module({
  controllers: [TaDaController],
  providers: [TaDaService],
  exports: [TaDaService],
})
export class TaDaModule {}
