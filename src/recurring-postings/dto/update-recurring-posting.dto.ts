import { PartialType } from '@nestjs/mapped-types';
import { CreateRecurringPostingDto } from './create-recurring-posting.dto';

export class UpdateRecurringPostingDto extends PartialType(CreateRecurringPostingDto) {}
