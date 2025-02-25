import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS to allow frontend to communicate with backend
  app.enableCors({
    origin: 'http://localhost:4200', // Replace with frontend URL in production
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
