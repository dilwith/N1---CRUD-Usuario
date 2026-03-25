import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../domain/user.repository.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findOne(id);
    return this.userRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.userRepository.remove(id);
  }
}
