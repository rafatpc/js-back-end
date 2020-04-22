import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../../middleware/auth.middleware'
import { CharacterRepository } from './character.repository';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
    imports: [TypeOrmModule.forFeature([CharacterRepository])],
    controllers: [CharacterController],
    providers: [CharacterService]
})
export class CharacterModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(CharacterController);
    }
}
