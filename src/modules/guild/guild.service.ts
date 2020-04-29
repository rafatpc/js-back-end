import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuildRepository } from './guild.repository';
import { Guild } from '../../database/guild.entity';

@Injectable()
export class GuildService {
    constructor(
        @InjectRepository(GuildRepository)
        private guildRepository: Repository<Guild>
    ) { }

    findOne(name: string, select?: Array<string>): Promise<Guild> {
        return this.guildRepository
            .createQueryBuilder('Guild')
            .leftJoinAndSelect('Guild.G_Members', 'GuildMember')
            .leftJoinAndMapOne('GuildMember.Character', 'Character', 'Character', 'GuildMember.Name = Character.Name')
            .select(select || [
                'Guild.G_Name',
                'Guild.G_Master',
                'Guild.G_Score',
                'Guild.G_Mark',
                'GuildMember.G_Status',
                'Character.Name',
                'Character.Class'
            ])
            .where({
                'G_Name': name
            })
            .getOne();
    }

    async exists(name: string): Promise<boolean> {
        return !!(await this.findOne(name));
    }
}
