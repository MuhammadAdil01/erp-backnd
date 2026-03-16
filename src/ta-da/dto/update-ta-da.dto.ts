import { PartialType } from '@nestjs/mapped-types';
import { CreateTaDaDto } from './create-ta-da.dto';

export class UpdateTaDaDto extends PartialType(CreateTaDaDto) {}
