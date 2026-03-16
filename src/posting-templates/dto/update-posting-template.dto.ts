import { PartialType } from '@nestjs/mapped-types';
import { CreatePostingTemplateDto } from './create-posting-template.dto';

export class UpdatePostingTemplateDto extends PartialType(CreatePostingTemplateDto) {}
