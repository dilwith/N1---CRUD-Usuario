import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileRepository } from '../domain/profile.repository.js';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async create(dto: CreateProfileDto) {
    return this.profileRepository.create(dto);
  }

  async findAll() {
    return this.profileRepository.findAll();
  }

  async findOne(id: string) {
    const profile = await this.profileRepository.findOne(id);
    if (!profile) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }
    return profile;
  }

  async update(id: string, dto: UpdateProfileDto) {
    await this.findOne(id);
    return this.profileRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.profileRepository.remove(id);
  }
}
