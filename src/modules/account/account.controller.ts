import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from 'src/entity/account.entity';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/get-all-account')
  async getAllAccount(): Promise<ResponseData<Account[]>> {
    return new ResponseData<Account[]>(
      await this.accountService.getAllAccount(),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Get('/find-by-id/:id')
  async findAccountById(
    @Param('id') id: number,
  ): Promise<ResponseData<Account>> {
    return new ResponseData<Account>(
      await this.accountService.findAccountById(id),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Post('/create-account')
  async createAccount(
    @Body() account: Account,
  ): Promise<ResponseData<Account>> {
    return new ResponseData<Account>(
      await this.accountService.createAccount(account),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Put('/update-account/:id')
  async updateAccount(
    @Param('id') id: number,
    @Body() account: Partial<Account>,
  ): Promise<ResponseData<Account>> {
    return new ResponseData<Account>(
      await this.accountService.updateAccount(id, account),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Delete('/delete-account/:id')
  async deleteAccount(@Param('id') id: number): Promise<ResponseData<boolean>> {
    return new ResponseData<boolean>(
      await this.accountService.deleteAccount(id),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }
}
