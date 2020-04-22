import { Controller, Get, Param } from '@nestjs/common';
import { Character } from 'src/database/character.entity';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
    constructor(
        private readonly characterService: CharacterService
    ) { }

    @Get(':name')
    async get(@Param('name') name): Promise<Character> {
        return await this.characterService.findOne(name, [
            'Name',
            'cLevel',
            'Resets',
            'GrandResets',
            'Class',
            'PkCount',
            'PkLevel'
        ]);
    }

    @Get(':name/extended')
    async extended(@Param('name') name): Promise<Character> {
        return await this.characterService.findOne(name);
    }
}
