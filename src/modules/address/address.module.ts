import { Module } from '@nestjs/common';
import { AddressService } from './application/address.service.js';
import { AddressController } from './presentation/address.controller.js';
import { AddressRepository } from './domain/address.repository.js';
import { PrismaAddressRepository } from './infrastructure/prisma-address.repository.js';

@Module({
  controllers: [AddressController],
  providers: [
    AddressService,
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository,
    },
  ],
  exports: [AddressService],
})
export class AddressModule {}
