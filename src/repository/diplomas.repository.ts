import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Diplomas } from 'src/entity/diplomas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiplomaRepository {
  constructor(
    @InjectRepository(Diplomas)
    private readonly diploma: Repository<Diplomas>,
  ) {}
}
