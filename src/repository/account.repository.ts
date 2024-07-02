import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entity/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  async findById(id: number): Promise<Account> {
    return this.accountRepository.findOne({ where: { id } });
  }

  async create(account: Account): Promise<Account> {
    return this.accountRepository.save(account);
  }

  async update(id: number, accountData: Partial<Account>): Promise<Account> {
    const account = await this.findById(id);
    if (!account) {
      throw new Error(`Account with ID ${id} not found`);
    }

    Object.assign(account, accountData);
    return this.accountRepository.save(account);
  }

  async delete(id: number): Promise<boolean> {
    const account = this.findById(id);
    await this.accountRepository.delete(await account);
    return true;
  }
}
