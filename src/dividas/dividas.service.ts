import { Injectable } from '@nestjs/common';
import { CreateDividaDto } from './dto/create-divida.dto';
import { UpdateDividaDto } from './dto/update-divida.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DividasService {
  constructor(private prismaService: PrismaService) {}
  create(createDividaDto: CreateDividaDto) {
    return this.prismaService.divida.create({
      data: createDividaDto,
    });
  }

  findAll() {
    return this.prismaService.divida.findMany({
      include:{
        user:true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} divida`;
  }

  update(id: number, updateDividaDto: UpdateDividaDto) {
    return `This action updates a #${id} divida`;
  }

  remove(id: number) {
    return `This action removes a #${id} divida`;
  }
}
