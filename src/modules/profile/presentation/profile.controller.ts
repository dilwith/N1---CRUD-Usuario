import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProfileService } from '../application/profile.service.js';
import { CreateProfileDto } from '../application/dto/create-profile.dto.js';
import { UpdateProfileDto } from '../application/dto/update-profile.dto.js';

@ApiTags('profiles')
@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiOperation({ summary: 'Create a profile' })
  create(@Body() dto: CreateProfileDto) {
    return this.profileService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all profiles' })
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a profile by id' })
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a profile' })
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a profile' })
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
