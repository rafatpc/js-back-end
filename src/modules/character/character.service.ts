import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterRepository } from './character.repository';
import { Character } from '../../database/character.entity';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(CharacterRepository)
        private characterRepository: Repository<Character>
    ) { }

    findOne(name: string, select?: string[]): Promise<Character> {
        return this.characterRepository.findOne(name, {
            select: select as any[],
            relations: ['Guild', 'Master']
        });
    }

    async exists(name: string): Promise<boolean> {
        return !!(await this.findOne(name));
    }

    isOnline(Name: string): Promise<boolean> {
        return this.characterRepository
            .createQueryBuilder('Character')
            .leftJoin('AccountCharacter', 'AC', 'AC.GameIDC = Character.Name')
            .leftJoin('MEMB_STAT', 'MS', 'AC.Id = MS.memb___id')
            .select('Character.Name')
            .where('Character.Name = :Name', { Name })
            .andWhere('MS.ConnectStat = 1')
            .getOne()
            .then(result => !!result);
    }
}
