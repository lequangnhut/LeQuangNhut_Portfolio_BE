import { ServiceRepository } from '../../repository/services.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesService {
  constructor(private readonly repo: ServiceRepository) {}
}
