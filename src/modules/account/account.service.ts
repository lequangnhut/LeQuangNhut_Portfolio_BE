import { Injectable } from '@nestjs/common';
import { Account } from 'src/entity/account.entity';
import { AccountRepository } from 'src/repository/account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async getAllAccount(): Promise<Account[]> {
    return this.accountRepository.findAll();
  }

  async findAccountById(id: number): Promise<Account> {
    return this.accountRepository.findById(id);
  }

  async createAccount(account: Account): Promise<Account> {
    return this.accountRepository.create(account);
  }

  async updateAccount(id: number, account: Partial<Account>): Promise<Account> {
    return this.accountRepository.update(id, account);
  }

  async deleteAccount(id: number): Promise<Boolean> {
    return this.accountRepository.delete(id);
  }
}
