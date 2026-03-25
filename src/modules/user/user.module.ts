import { Module } from '@nestjs/common';
import { UserService } from './application/user.service.js';
import { UserController } from './presentation/user.controller.js';
import { UserRepository } from './domain/user.repository.js';
import { PrismaUserRepository } from './infrastructure/prisma-user.repository.js';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
