import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('MoneyMuse API')       // Set the title for the API
    .setDescription('API for Wealth Management App (moneymuse)')  // Add a description
    .setVersion('1.0')                        // API version
    .addBearerAuth()                          // Include Bearer Token Authentication (optional)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('moneymuse/api', app, document);  // Serve Swagger at /api

  await app.listen(3000);
}
bootstrap();
