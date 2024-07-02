import { Module } from '@nestjs/common';
import { Studies } from 'src/entity/studies.entity';
import { StudiesRepository } from 'src/repository/studies.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudiesController } from './studies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Studies])],
  controllers: [StudiesController],
  providers: [Studies, StudiesRepository],
})
export class StudieModule {}
