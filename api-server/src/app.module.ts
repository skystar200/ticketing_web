import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], //의존성 주입, AppController에 AppService 넣어주는 것
})
export class AppModule {}
