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
import { AddressService } from '../application/address.service.js';
import { CreateAddressDto } from '../application/dto/create-address.dto.js';
import { UpdateAddressDto } from '../application/dto/update-address.dto.js';

@ApiTags('addresses')
@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiOperation({ summary: 'Create an address' })
  create(@Body() dto: CreateAddressDto) {
    return this.addressService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all addresses' })
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an address by id' })
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an address' })
  update(@Param('id') id: string, @Body() dto: UpdateAddressDto) {
    return this.addressService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an address' })
  remove(@Param('id') id: string) {
    return this.addressService.remove(id);
  }
}
