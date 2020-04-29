import { Controller, Get, Param } from '@nestjs/common';
import { Guild } from 'src/database/guild.entity';
import { GuildService } from './guild.service';

@Controller('guild')
export class GuildController {
    constructor(
        private readonly guildService: GuildService
    ) { }

    @Get(':name')
    get(@Param('name') name): Promise<Guild> {
        return this.guildService.findOne(name);
    }
}
