import { Controller, Get, Param } from '@nestjs/common';
import { GuildService } from './guild.service';

@Controller('guild')
export class GuildController {
    constructor(
        private readonly guildService: GuildService
    ) { }

    @Get(':name')
    async get(@Param('name') name) {
        const guild = await this.guildService.findOne(name);
        const mark = guild.G_Mark;
        // const hexMark = Buffer.from( someNumber.toString(16), 'hex' ); ;

        // console.log('<><>', mark.toString('hex'));

        // console.log(new Uint8Array(mark));




        return guild.G_Mark;
    }
}
