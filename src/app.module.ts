import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/infrastructure/prisma/prisma.module.js';
import { ProfileModule } from './modules/profile/profile.module.js';
import { UserModule } from './modules/user/user.module.js';
import { AddressModule } from './modules/address/address.module.js';

@Module({
  imports: [PrismaModule, ProfileModule, UserModule, AddressModule],
})
export class AppModule {}
