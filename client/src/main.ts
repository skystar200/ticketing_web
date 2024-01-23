import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //다른 자원에서 접근할 수 있는 권한 부여
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))
  await app.listen(3000);
}
bootstrap();
