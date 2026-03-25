import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/infrastructure/prisma/prisma.service.js';
import {
  AddressRepository,
  CreateAddressData,
  UpdateAddressData,
} from '../domain/address.repository.js';
import { AddressEntity } from '../domain/address.entity.js';

@Injectable()
export class PrismaAddressRepository extends AddressRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
    console.log('PrismaAddressRepository');
  }

  async create(data: CreateAddressData): Promise<AddressEntity> {
    const address = await this.prisma.address.create({ data });
    console.log('create');
    return new AddressEntity(address);
  }

  async findAll(): Promise<AddressEntity[]> {
    const addresses = await this.prisma.address.findMany({
      include: { user: true },
    });
    return addresses.map((a) => new AddressEntity(a));
  }

  async findOne(id: string): Promise<AddressEntity | null> {
    const address = await this.prisma.address.findUnique({
      where: { id },
      include: { user: true },
    });
    return address ? new AddressEntity(address) : null;
  }

  async update(id: string, data: UpdateAddressData): Promise<AddressEntity> {
    const address = await this.prisma.address.update({
      where: { id },
      data,
      include: { user: true },
    });
    return new AddressEntity(address);
  }

  async remove(id: string): Promise<AddressEntity> {
    const address = await this.prisma.address.delete({
      where: { id },
      include: { user: true },
    });
    return new AddressEntity(address);
  }
}
