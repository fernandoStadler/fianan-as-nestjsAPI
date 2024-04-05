import { Module } from '@nestjs/common';
import { DividasService } from './dividas.service';
import { DividasController } from './dividas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DividasController],
  providers: [DividasService],
})
export class DividasModule {}
