import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('ERP Backend API')
    .setDescription('API documentation for the ERP system - HR & Financial modules')
    .setVersion('1.0')
    .addTag('HR', 'Human Resources endpoints')
    .addTag('Financial', 'Financial module endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
