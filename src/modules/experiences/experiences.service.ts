import { ExperienceRepository } from 'src/repository/experiences.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExperienceService {
  constructor(private readonly repo: ExperienceRepository) {}
}
