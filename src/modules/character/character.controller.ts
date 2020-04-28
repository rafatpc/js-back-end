import { Controller, Get, Param } from '@nestjs/common';
import { Character } from 'src/database/character.entity';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
    constructor(
        private readonly characterService: CharacterService
    ) { }

    @Get(':name')
    get(@Param('name') name): Promise<Character> {
        return this.characterService.findOne(name, [
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
    extended(@Param('name') name): Promise<Character> {
        return this.characterService.findOne(name);
    }
}
