import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuildRepository } from './guild.repository';
import { Guild } from '../database/guild.entity'

@Injectable()
export class GuildService {
    constructor(
        @InjectRepository(GuildRepository)
        private guildRepository: Repository<Guild>
    ) { }

    findAll(): Promise<Guild[]> {
        return this.guildRepository.find();
    }

    findOne(name: string): Promise<Guild> {
        return this.guildRepository.findOne(name);
    }

    async exists(name: string): Promise<boolean> {
        return this.findOne(name).then(match => {
            return !!match;
        });
    }
}

