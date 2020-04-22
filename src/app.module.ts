import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { CharacterModule } from './modules/character/character.module';
import { GuildModule } from './modules/guild/guild.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        CharacterModule,
        GuildModule
    ]
})
export class AppModule { }
