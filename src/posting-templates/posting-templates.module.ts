import { Module } from '@nestjs/common';
import { PostingTemplatesController } from './posting-templates.controller';
import { PostingTemplatesService } from './posting-templates.service';

@Module({
  controllers: [PostingTemplatesController],
  providers: [PostingTemplatesService],
})
export class PostingTemplatesModule {}
