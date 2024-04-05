import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  create(arg0: { data: { name: string; status: boolean; email: string; cpf: string; login: string; password: string; hireDate: string; createdAt: Date; updatedAt: Date; }; }) {
    throw new Error('Method not implemented.');
  }
  async onModuleInit() {
    await this.$connect();
  }
}