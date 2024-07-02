import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from 'src/entity/services.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceRepository {
  constructor(
    @InjectRepository(Services)
    private readonly service: Repository<Services>,
  ) {}
}
