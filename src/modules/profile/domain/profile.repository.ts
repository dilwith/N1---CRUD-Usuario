import { ProfileEntity } from './profile.entity.js';

export abstract class ProfileRepository {
  abstract create(data: { name: string }): Promise<ProfileEntity>;
  abstract findAll(): Promise<ProfileEntity[]>;
  abstract findOne(id: string): Promise<ProfileEntity | null>;
  abstract update(id: string, data: { name?: string }): Promise<ProfileEntity>;
  abstract remove(id: string): Promise<ProfileEntity>;
}
