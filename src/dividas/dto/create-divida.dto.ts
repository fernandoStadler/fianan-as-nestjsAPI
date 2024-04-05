import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateDividaDto {
  @ApiProperty()
  userId: string;

  @IsString()
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @ApiProperty()
  valor: number;

  @IsDateString()
  @ApiProperty()
  dataVencimento: Date;

  @IsBoolean()
  @ApiProperty()
  statusVencimento: boolean;


  @IsDateString()
  dataCriacao?: Date;

  @IsDateString()
  dataAtualizacao?: Date;
}
