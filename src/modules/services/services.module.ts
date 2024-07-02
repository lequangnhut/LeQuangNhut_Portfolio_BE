import { Services } from 'src/entity/services.entity';
import { ServiceController } from './services.controller';
import { Module } from '@nestjs/common';
import { ServiceRepository } from 'src/repository/services.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Services])],
  controllers: [ServiceController],
  providers: [Services, ServiceRepository],
})
export class ServiceModule {}
ServiceController;
