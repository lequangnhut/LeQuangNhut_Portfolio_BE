import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Infos } from 'src/entity/infos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InfoRepository {
  constructor(
    @InjectRepository(Infos)
    private readonly infos: Repository<Infos>,
  ) {}

  async getAll(): Promise<Infos[]> {
    return this.infos.find();
  }
}
