import { Controller, Get } from '@nestjs/common';
import { InfoService } from './infos.service';
import { Infos } from 'src/entity/infos.entity';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('api/v1/infos')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get('/get-all-infos')
  public async getAllInfo(): Promise<ResponseData<Infos[]>> {
    return new ResponseData<Infos[]>(
      await this.infoService.getAll(),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }
}
