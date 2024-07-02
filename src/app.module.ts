import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './modules/account/account.module';
import { DiplomaModule } from './modules/diplomas/diplomas.module';
import { ExpereModule } from './modules/expereferences/experefen.module';
import { ExperencesModule } from './modules/experiences/experiences.module';
import { InfoModule } from './modules/infos/infos.module';
import { ServiceModule } from './modules/services/services.module';
import { SkillModule } from './modules/skills/skills.module';
import { StudieModule } from './modules/studies/studies.module';
import { Infos } from './entity/infos.entity';
import { Account } from './entity/account.entity';
import { Diplomas } from './entity/diplomas.entity';
import { Expe_references } from './entity/expe_references.entity';
import { Experiences } from './entity/experiences.entity';
import { Services } from './entity/services.entity';
import { Skills } from './entity/skills.entity';
import { Studies } from './entity/studies.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'web_profile',
      entities: [
        Account,
        Diplomas,
        Expe_references,
        Experiences,
        Infos,
        Services,
        Skills,
        Studies,
      ],
      synchronize: true,
    }),
    AccountModule,
    DiplomaModule,
    ExpereModule,
    ExperencesModule,
    InfoModule,
    ServiceModule,
    SkillModule,
    StudieModule,
  ],
})
export class AppModule {}
