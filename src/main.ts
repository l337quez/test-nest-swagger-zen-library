import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  const swaggerPath = 'api/docs';

  const config = new DocumentBuilder()
    .setTitle('Simple CRUD API')
    .setDescription('Demo with nest-swagger-zen')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);
  logger.log(`🚀 Application is running on: http://localhost:${port}`);
  logger.log(`📄 Swagger documentation: http://localhost:${port}/${swaggerPath}`);
}
bootstrap();
