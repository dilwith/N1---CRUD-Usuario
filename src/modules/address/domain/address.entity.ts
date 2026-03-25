export class AddressEntity {
  id: string;
  street: string;
  number: number;
  city: string;
  state: string;
  zipCode: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<AddressEntity>) {
    Object.assign(this, partial);
  }
}
