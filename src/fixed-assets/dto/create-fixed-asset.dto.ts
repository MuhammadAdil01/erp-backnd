import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateFixedAssetDto {
  @IsString()
  assetName: string;

  @IsString()
  assetCategory: string;

  @IsOptional() @IsString()
  serialNumber?: string;

  @IsOptional() @IsString()
  assetTagId?: string;

  @IsOptional() @IsString()
  modelNumber?: string;

  @IsOptional() @IsString()
  manufacturer?: string;

  @IsOptional() @IsDateString()
  purchaseDate?: string;

  @IsOptional() @IsNumber()
  purchaseCost?: number;

  @IsOptional() @IsNumber()
  marketValue?: number;

  @IsOptional() @IsString()
  depreciationMethod?: string;

  @IsOptional() @IsNumber()
  lifeSpan?: number;

  @IsOptional() @IsNumber()
  salvageValue?: number;

  @IsOptional() @IsString()
  location?: string;

  @IsOptional() @IsString()
  custodianName?: string;

  @IsOptional() @IsDateString()
  warrantyExpiry?: string;

  @IsOptional() @IsString()
  serviceProvider?: string;
}
