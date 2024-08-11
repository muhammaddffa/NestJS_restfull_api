import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { Auth } from '../common/auth.decorator';
import { AddressResponse, CreateAddressRequest } from '../model/address.model';
import { WebResponse } from '../model/web.model';
import { AddressService } from './address.service';
import { User } from '@prisma/client';

@Controller('/api/contacts/:contactId/addresses')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() user: User,
    @Param('contactId') contactId: string,
    @Body() request: CreateAddressRequest,
  ): Promise<WebResponse<AddressResponse>> {
    request.contact_id = contactId;
    const result = await this.addressService.create(user, request);
    return {
      data: result,
    };
  }
}
