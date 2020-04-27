import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Character } from '../../database/character.entity';
import { Guild } from '../../database/guild.entity';
import { MEMB_STAT } from '../../database/memb-stat.entity';
import { OnlineCharacter, StatResult } from '../../types/rankings.types';

@Injectable()
export class RankingsService {
    private characters: Repository<Character>;
    private status: Repository<MEMB_STAT>;
    private guilds: Repository<Guild>;

    constructor(
        @InjectConnection()
        private connection: Connection
    ) {
        this.characters = this.connection.getRepository(Character);
        this.status = this.connection.getRepository(MEMB_STAT);
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
                'Honor',
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

    getGuildsRankings(): Promise<Guild[]> {
        return this.guilds.find({
            select: [
                'G_Name',
                'G_Master',
                'G_Mark',
                'G_Score',
                'G_Type',
                'G_Rival',
                'G_Union'
            ],
            order: {
                'G_Score': 'DESC'
            },
            relations: ['G_Members']
        });
    }

    getOnlineCharacters(): Promise<OnlineCharacter[]> {
        return this.status
            .createQueryBuilder('Stat')
            .leftJoinAndSelect('Stat.Account', 'AccountCharacter')
            .leftJoinAndSelect('AccountCharacter.GameIDC', 'Character')
            .leftJoinAndSelect('Character.Guild', 'GuildMember')
            .select([
                'Stat.ServerName',
                'Stat.ConnectTM',
                'Stat.DisConnectTM',
                'Stat.OnlineHours',
                'AccountCharacter.GameIDC',
                'Character.Name',
                'Character.PkLevel',
                'Character.Class',
                'Character.cLevel',
                'Character.Resets',
                'Character.GrandResets',
                'Character.MapNumber',
                'GuildMember.G_Name'
            ])
            .where('Stat.ConnectStat = :ConnectStat', { ConnectStat: 1 })
            .orderBy('Stat.ConnectTM', 'DESC')
            .getMany()
            .then(this.trasnformOnlineCharactersData);
    }

    private trasnformOnlineCharactersData(result: MEMB_STAT[]) {
        const OnlineCharacters = result as any as StatResult[];

        return OnlineCharacters.map((Data: StatResult) => {
            const CharacterData: Character = Data.Account.GameIDC;

            return {
                ...Data,
                Account: undefined,
                Guild: CharacterData.Guild,
                Character: {
                    ...CharacterData,
                    Guild: undefined
                }
            } as OnlineCharacter;
        });
    }
}
