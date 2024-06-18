import { Injectable } from '@nestjs/common';
import { StudiesRepository } from 'src/repository/studies.repository';

@Injectable()
export class SkillService {
  constructor(private readonly repo: StudiesRepository) {}
}
