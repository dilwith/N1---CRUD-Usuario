import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateAddressDto {
  @ApiPropertyOptional({ example: 'Avenida Paulista' })
  @IsString()
  @IsOptional()
  street?: string;

  @ApiPropertyOptional({ example: 456 })
  @IsInt()
  @IsOptional()
  number?: number;

  @ApiPropertyOptional({ example: 'Rio de Janeiro' })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional({ example: 'RJ' })
  @IsString()
  @IsOptional()
  state?: string;

  @ApiPropertyOptional({ example: '20040-020' })
  @IsString()
  @IsOptional()
  zipCode?: string;
}
