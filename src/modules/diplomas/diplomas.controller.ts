import { Controller, Get } from '@nestjs/common';
import { DiplomaService } from './diplomas.service';
import { ResponseData } from 'src/global/globalClass';
import { Diplomas } from 'src/entity/diplomas.entity';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('diplomas')
export class DiplomaController {
  constructor(private readonly diplomaService: DiplomaService) {}

  @Get('/get-all-diplomas')
  async getAllDiplomas(): Promise<ResponseData<Diplomas[]>> {
    return new ResponseData<Diplomas[]>(
      await this.diplomaService.getAllDiplomas(),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }
}
