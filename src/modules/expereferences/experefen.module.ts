import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperefenController } from './experefen.controller';
import { Module } from '@nestjs/common';
import { Expe_references } from 'src/entity/expe_references.entity';
import { Expe_referenceRepository } from 'src/repository/expe_references.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Expe_references])],
  controllers: [ExperefenController],
  providers: [Expe_references, Expe_referenceRepository],
})
export class ExpereModule {}
