import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { CharacterModule } from './character/character.module';
import { GuildModule } from './guild/guild.module';
import { RankingsModule } from './rankings/rankings.module';
import { ConfigModule } from './config/config.module';
import { AccountModule } from './account/account.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        CharacterModule,
        GuildModule,
        RankingsModule,
        ConfigModule,
        AccountModule
    ]
})
export class AppModule { }
