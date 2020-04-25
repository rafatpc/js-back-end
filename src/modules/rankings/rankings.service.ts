import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Character } from '../../database/character.entity';
import { Guild } from '../../database/guild.entity';

@Injectable()
export class RankingsService {
    private characters: Repository<Character>;
    private guilds: Repository<Guild>;

    constructor(
        @InjectConnection()
        private connection: Connection
    ) {
        this.characters = this.connection.getRepository(Character);
        this.guilds = this.connection.getRepository(Guild);
    }

    getCharactersRankings(): Promise<Character[]> {
        return this.characters.find({
            select: [
                'Name',
                'PkLevel',
                'Class',
                'cLevel',
                'Resets',
                'GrandResets',
                'MapNumber'
            ],
            relations: ['Guild'],
            order: {
                'GrandResets': 'DESC',
                'Resets': 'DESC',
                'cLevel': 'DESC',
                'Experience': 'DESC'
            }
        });
    }
}

