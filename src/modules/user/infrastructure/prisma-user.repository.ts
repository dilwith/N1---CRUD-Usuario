import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/infrastructure/prisma/prisma.service.js';
import {
  UserRepository,
  CreateUserData,
  UpdateUserData,
} from '../domain/user.repository.js';
import { UserEntity } from '../domain/user.entity.js';

@Injectable()
export class PrismaUserRepository extends UserRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CreateUserData): Promise<UserEntity> {
    const user = await this.prisma.user.create({ data });
    return new UserEntity(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany({
      include: { profile: true, address: true },
    });
    return users.map((u) => new UserEntity(u));
  }

  async findOne(id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { profile: true, address: true },
    });
    return user ? new UserEntity(user) : null;
  }

  async update(id: string, data: UpdateUserData): Promise<UserEntity> {
    const user = await this.prisma.user.update({
      where: { id },
      data,
      include: { profile: true, address: true },
    });
    return new UserEntity(user);
  }

  async remove(id: string): Promise<UserEntity> {
    const user = await this.prisma.user.delete({
      where: { id },
      include: { profile: true, address: true },
    });
    return new UserEntity(user);
  }
}
