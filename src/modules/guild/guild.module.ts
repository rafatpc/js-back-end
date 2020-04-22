import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildRepository } from './guild.repository';
import { GuildController } from './guild.controller';
import { GuildService } from './guild.service';

@Module({
    imports: [TypeOrmModule.forFeature([GuildRepository])],
    controllers: [GuildController],
    providers: [GuildService]
})
export class GuildModule { }
