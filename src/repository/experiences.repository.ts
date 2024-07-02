import { InjectRepository } from '@nestjs/typeorm';
import { Experiences } from '../entity/experiences.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExperienceRepository {
  constructor(
    @InjectRepository(Experiences)
    private readonly experience: Experiences,
  ) {}
}
