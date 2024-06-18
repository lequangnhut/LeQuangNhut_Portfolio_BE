import { Injectable } from '@nestjs/common';
import { DiplomaRepository } from 'src/repository/diplomas.repository';

@Injectable()
export class DiplomaService {
  constructor(private readonly repo: DiplomaRepository) {}
}
