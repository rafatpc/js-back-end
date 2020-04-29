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
}

