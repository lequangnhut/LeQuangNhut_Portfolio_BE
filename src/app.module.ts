import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './modules/account/account.module';
import { DiplomaModule } from './modules/diplomas/diplomas.module';
import { ExpereModule } from './modules/expereferences/experefen.module';
import { ExperencesModule } from './modules/experiences/experiences.module';
import { InfoModule } from './modules/infos/infos.module';
import { ServiceModule } from './modules/services/services.module';
import { SkillModule } from './modules/skills/skills.module';
import { StudieModule } from './modules/studies/studies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'web_profile',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
