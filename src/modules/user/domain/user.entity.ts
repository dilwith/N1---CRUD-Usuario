export class UserEntity {
  id: string;
  email: string;
  password: string;
  name: string;
  profileId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
