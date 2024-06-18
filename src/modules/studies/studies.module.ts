import { Module } from '@nestjs/common';
import { StudieController } from './studies.controller';
import { Studies } from 'src/entity/studies.entity';
import { StudiesRepository } from 'src/repository/studies.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Studies])],
  controllers: [StudieController],
  providers: [Studies, StudiesRepository],
})
export class StudieModule {}
