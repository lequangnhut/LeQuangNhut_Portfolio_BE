import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skills } from 'src/entity/skills.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillRepository {
  constructor(
    @InjectRepository(Skills)
    private readonly skill: Repository<Skills>,
  ) {}
}
