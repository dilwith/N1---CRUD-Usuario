export class ProfileEntity {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<ProfileEntity>) {
    Object.assign(this, partial);
  }
}
