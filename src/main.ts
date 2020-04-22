import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app.module';

const PORT = 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    Logger.log('Setting up global ClassSerializerInterceptor', 'Bootstrapper')
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

    Logger.log('Setting up global ValidationPipe', 'Bootstrapper')
    app.useGlobalPipes(new ValidationPipe());

    Logger.log('Starting...', 'Bootstrapper')
    await app.listen(PORT);
    Logger.log(`API Runnining on http://localhost:${PORT}`, 'Bootstrapper')
}
bootstrap();
