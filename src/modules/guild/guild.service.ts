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
        return this.guildRepository.findOne(name, {
            select: select as any || [
                'G_Name',
                'G_Master',
                'G_Score',
                'G_Mark',
            ],
            relations: ['G_Members', 'G_Members.Name']
        });
    }

    async exists(name: string): Promise<boolean> {
        return !!(await this.findOne(name));
    }
}
