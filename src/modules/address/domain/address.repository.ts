import { AddressEntity } from './address.entity.js';

export interface CreateAddressData {
  street: string;
  number: number;
  city: string;
  state: string;
  zipCode: string;
  userId: string;
}

export interface UpdateAddressData {
  street?: string;
  number?: number;
  city?: string;
  state?: string;
  zipCode?: string;
}

export abstract class AddressRepository {
  abstract create(data: CreateAddressData): Promise<AddressEntity>;
  abstract findAll(): Promise<AddressEntity[]>;
  abstract findOne(id: string): Promise<AddressEntity | null>;
  abstract update(id: string, data: UpdateAddressData): Promise<AddressEntity>;
  abstract remove(id: string): Promise<AddressEntity>;
}
