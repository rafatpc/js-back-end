import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app.module';

const PORT = 3000;
const whiteListedOrigins = [
    'http://localhost:4200'
];

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    Logger.log(`Enable CORS from ${whiteListedOrigins.join(', ')}`, 'Bootstrapper')
    app.enableCors({
        origin: whiteListedOrigins
    });

    Logger.log('Setting up global ClassSerializerInterceptor', 'Bootstrapper')
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

    Logger.log('Setting up global ValidationPipe', 'Bootstrapper')
    app.useGlobalPipes(new ValidationPipe());

    Logger.log('Starting...', 'Bootstrapper')
    await app.listen(PORT);
    Logger.log(`API Runnining on http://localhost:${PORT}`, 'Bootstrapper')
}
bootstrap();
