import { Module } from '@nestjs/common';
import { InfoController } from './infos.controller';
import { Infos } from 'src/entity/infos.entity';
import { InfoRepository } from 'src/repository/infos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoService } from './infos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Infos])],
  controllers: [InfoController],
  providers: [InfoService, InfoRepository],
})
export class InfoModule {}
