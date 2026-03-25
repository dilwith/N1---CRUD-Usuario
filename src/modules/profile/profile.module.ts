import { Module } from '@nestjs/common';
import { ProfileService } from './application/profile.service.js';
import { ProfileController } from './presentation/profile.controller.js';
import { ProfileRepository } from './domain/profile.repository.js';
import { PrismaProfileRepository } from './infrastructure/prisma-profile.repository.js';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    {
      provide: ProfileRepository,
      useClass: PrismaProfileRepository,
    },
  ],
  exports: [ProfileService],
})
export class ProfileModule {}
