import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JoinModule } from './join/join.module';
import { UserModule } from './user/user.module';
// import { UserModule } from './user/user.module';


@Module({
  imports: [JoinModule, TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: ,
      database: 'ticketing_web',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,

  }),
  JoinModule,
  UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
