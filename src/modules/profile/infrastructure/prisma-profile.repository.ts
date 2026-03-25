import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/infrastructure/prisma/prisma.service.js';
import { ProfileRepository } from '../domain/profile.repository.js';
import { ProfileEntity } from '../domain/profile.entity.js';

@Injectable()
export class PrismaProfileRepository extends ProfileRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: { name: string }): Promise<ProfileEntity> {
    const profile = await this.prisma.profile.create({ data });
    return new ProfileEntity(profile);
  }

  async findAll(): Promise<ProfileEntity[]> {
    const profiles = await this.prisma.profile.findMany();
    return profiles.map((p) => new ProfileEntity(p));
  }

  async findOne(id: string): Promise<ProfileEntity | null> {
    const profile = await this.prisma.profile.findUnique({ where: { id } });
    return profile ? new ProfileEntity(profile) : null;
  }

  async update(id: string, data: { name?: string }): Promise<ProfileEntity> {
    const profile = await this.prisma.profile.update({
      where: { id },
      data,
    });
    return new ProfileEntity(profile);
  }

  async remove(id: string): Promise<ProfileEntity> {
    const profile = await this.prisma.profile.delete({ where: { id } });
    return new ProfileEntity(profile);
  }
}
