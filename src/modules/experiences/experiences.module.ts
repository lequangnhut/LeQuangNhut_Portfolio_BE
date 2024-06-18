import { Module } from '@nestjs/common';
import { ExperiencesController } from './experiences.controller';
import { Experiences } from 'src/entity/experiences.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Experiences])],
  controllers: [ExperiencesController],
  providers: [Experiences],
})
export class ExperencesModule {}
