import { Controller } from '@nestjs/common';
import { DiplomaService } from './diplomas.service';

@Controller('diplomas')
export class DiplomaController {
  constructor(private readonly diplomaService: DiplomaService) {}
}
