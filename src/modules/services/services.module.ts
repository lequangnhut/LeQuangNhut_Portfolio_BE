import { Service } from 'src/entity/services,entity';
import { ServiceController } from './services.controller';
import { Module } from '@nestjs/common';
import { ServiceRepository } from 'src/repository/services.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  controllers: [ServiceController],
  providers: [Service, ServiceRepository],
})
export class ServiceModule {}
ServiceController;
