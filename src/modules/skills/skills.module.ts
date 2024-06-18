import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillController } from './skills.controller';
import { Module } from '@nestjs/common';
import { Skills } from 'src/entity/skills.entity';
import { SkillService } from './skills.service';
import { SkillRepository } from 'src/repository/skills.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Skills])],
  controllers: [SkillController],
  providers: [SkillService, SkillRepository],
})
export class SkillModule {}
