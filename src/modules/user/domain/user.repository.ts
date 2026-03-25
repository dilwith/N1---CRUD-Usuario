import { UserEntity } from './user.entity.js';

export interface CreateUserData {
  email: string;
  password: string;
  name: string;
  profileId: string;
}

export interface UpdateUserData {
  email?: string;
  password?: string;
  name?: string;
  profileId?: string;
}

export abstract class UserRepository {
  abstract create(data: CreateUserData): Promise<UserEntity>;
  abstract findAll(): Promise<UserEntity[]>;
  abstract findOne(id: string): Promise<UserEntity | null>;
  abstract update(id: string, data: UpdateUserData): Promise<UserEntity>;
  abstract remove(id: string): Promise<UserEntity>;
}
