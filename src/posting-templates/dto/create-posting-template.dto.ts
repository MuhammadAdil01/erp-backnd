import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostingTemplateLineDto {
  @IsString()
  glAccountCode: string;

  @IsOptional() @IsString()
  glAccountName?: string;

  @IsString()
  side: string;

  @IsOptional() @IsString()
  amountFormula?: string;

  @IsOptional() @IsString()
  defaultMemo?: string;
}

export class CreatePostingTemplateDto {
  @IsString()
  templateName: string;

  @IsString()
  templateCode: string;

  @IsString()
  voucherType: string;

  @IsOptional() @IsString()
  automationMode?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostingTemplateLineDto)
  lines?: CreatePostingTemplateLineDto[];
}
