import { SkillRepository } from 'src/repository/skills.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SkillService {
  constructor(private readonly repo: SkillRepository) {}
}
