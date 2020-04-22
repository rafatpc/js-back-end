import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

const PORT = 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
    Logger.log(`API Runnining on http://localhost:${PORT}`, 'Bootstrapper')
}
bootstrap();
