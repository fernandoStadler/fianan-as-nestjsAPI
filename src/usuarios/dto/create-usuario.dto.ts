import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { CreateDividaDto } from 'src/dividas/dto/create-divida.dto';

export class CreateUsuarioDto {

  @IsString()
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @ApiProperty()
  renda: number;


  @IsDateString()
  dataCriacao?: Date;

  @IsDateString()
  dataAtualizacao?: Date;

  dividas: CreateDividaDto[]
}


