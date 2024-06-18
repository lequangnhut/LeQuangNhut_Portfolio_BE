import { Injectable } from '@nestjs/common';
import { Expe_referenceRepository } from 'src/repository/expe_references.repository';

@Injectable()
export class ExperenfenService {
  constructor(private readonly repo: Expe_referenceRepository) {}
}
