import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ChartOfAccountsModule } from './chart-of-accounts/chart-of-accounts.module';

@Module({
  imports: [PrismaModule, ChartOfAccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
