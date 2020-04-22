import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuildRepository } from './guild.repository';
import { Guild } from '../database/guild.entity'
import { GuildMember } from 'src/database/guild-member.entity';

@Injectable()
export class GuildService {
    constructor(
        @InjectRepository(GuildRepository)
        private guildRepository: Repository<Guild>
    ) { }

    findAll(): Promise<Guild[]> {
        return this.guildRepository.find();
    }

    findOne(name: string, select?: Array<string>): Promise<Guild> {
        return this.guildRepository.findOne(name, {
            select: select as any[],
            relations: ['G_Members']
        });
    }

    async exists(name: string): Promise<boolean> {
        return !!(await this.findOne(name));
    }
}

