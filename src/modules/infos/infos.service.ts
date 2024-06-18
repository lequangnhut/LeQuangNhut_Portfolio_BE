import { InfoRepository } from 'src/repository/infos.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InfoService {
  constructor(private readonly repo: InfoRepository) {}
}
