import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expe_references } from 'src/entity/expe_references.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Expe_referenceRepository {
  constructor(
    @InjectRepository(Expe_references)
    private readonly expe_reference: Repository<Expe_references>,
  ) {}
}
