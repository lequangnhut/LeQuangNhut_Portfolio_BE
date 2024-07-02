import { Injectable } from '@nestjs/common';
import { Diplomas } from 'src/entity/diplomas.entity';
import { DiplomaRepository } from 'src/repository/diplomas.repository';

@Injectable()
export class DiplomaService {
  constructor(private readonly repo: DiplomaRepository) {}

  async getAllDiplomas(): Promise<Diplomas[]> {
    return await this.repo.findAll();
  }
}
