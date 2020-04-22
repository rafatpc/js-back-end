import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterRepository } from './character.repository';
import { Character } from '../database/character.entity';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(CharacterRepository)
        private usersRepository: Repository<Character>
    ) { }

    findAll(): Promise<Character[]> {
        return this.usersRepository.find();
    }

    findOne(name: string, select?: Array<string>): Promise<Character> {
        return this.usersRepository.findOne(name, {
            select: select as any[]
        });
    }

    async exists(name: string): Promise<boolean> {
        return !!(await this.findOne(name));
    }
}

