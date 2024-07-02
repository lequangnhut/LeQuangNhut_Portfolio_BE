import { InfoRepository } from 'src/repository/infos.repository';
import { Injectable } from '@nestjs/common';
import { Infos } from 'src/entity/infos.entity';

@Injectable()
export class InfoService {
  constructor(private readonly repo: InfoRepository) {}

  public async getAll(): Promise<Infos[]> {
    return await this.repo.getAll();
  }
}
