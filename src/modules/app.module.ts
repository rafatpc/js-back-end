import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { CharacterModule } from './character/character.module';
import { ConfigModule } from './config/config.module';
import { GuildModule } from './guild/guild.module';
import { RankingsModule } from './rankings/rankings.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        SharedModule,
        AuthModule,
        UserModule,
        CharacterModule,
        GuildModule,
        RankingsModule,
        ConfigModule,
        AccountModule
    ]
})
export class AppModule { }
