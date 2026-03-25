import { Injectable, NotFoundException } from '@nestjs/common';
import { AddressRepository } from '../domain/address.repository.js';
import { CreateAddressDto } from './dto/create-address.dto.js';
import { UpdateAddressDto } from './dto/update-address.dto.js';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepository: AddressRepository) {}

  async create(dto: CreateAddressDto) {
    return this.addressRepository.create(dto);
  }

  async findAll() {
    return this.addressRepository.findAll();
  }

  async findOne(id: string) {
    const address = await this.addressRepository.findOne(id);
    if (!address) {
      throw new NotFoundException(`Address with id ${id} not found`);
    }
    return address;
  }

  async update(id: string, dto: UpdateAddressDto) {
    await this.findOne(id);
    return this.addressRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.addressRepository.remove(id);
  }
}
