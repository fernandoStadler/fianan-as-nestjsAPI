import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { DividasModule } from './dividas/dividas.module';

@Module({
  imports: [UsuariosModule, PrismaModule, DividasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
