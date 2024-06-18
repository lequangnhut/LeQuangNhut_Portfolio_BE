import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Studies } from 'src/entity/studies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudiesRepository {
  constructor(
    @InjectRepository(Studies)
    private readonly studie: Repository<Studies>,
  ) {}
}
