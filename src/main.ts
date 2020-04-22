import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, ClassSerializerInterceptor } from '@nestjs/common';
import { AppModule } from './app.module';

const PORT = 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    Logger.log('Setting up global ClassSerializerInterceptor', 'Bootstrapper')
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

    await app.listen(PORT);
    Logger.log(`API Runnining on http://localhost:${PORT}`, 'Bootstrapper')
}
bootstrap();
