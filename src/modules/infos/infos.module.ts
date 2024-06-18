import { Module } from '@nestjs/common';
import { InfoController } from './infos.controller';
import { Infos } from 'src/entity/infos.entity';
import { InfoRepository } from 'src/repository/infos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Infos])],
  controllers: [InfoController],
  providers: [Infos, InfoRepository],
})
export class InfoModule {}
