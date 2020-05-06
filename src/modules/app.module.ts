import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { CharacterModule } from './character/character.module';
import { GuildModule } from './guild/guild.module';
import { RankingsModule } from './rankings/rankings.module';
import { ConfigModule } from './config/config.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

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
