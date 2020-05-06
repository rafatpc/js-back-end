import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { CharacterService } from '../character/character.service';
import { CharacterRepository } from '../character/character.repository';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([CharacterRepository])
    ],
    controllers: [AccountController],
    providers: [
        AccountService,
        CharacterService
    ]
})
export class AccountModule {
    configure(consumer: MiddlewareConsumer) { }
}

