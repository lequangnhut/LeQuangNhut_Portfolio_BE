import { DiplomaController } from './diplomas.controller';
import { Module } from '@nestjs/common';
import { DiplomaService } from './diplomas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diplomas } from 'src/entity/diplomas.entity';
import { DiplomaRepository } from 'src/repository/diplomas.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Diplomas])],
  controllers: [DiplomaController],
  providers: [DiplomaService, DiplomaRepository],
})
export class DiplomaModule {}
