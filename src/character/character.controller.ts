import { Controller, Get, Param } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
    constructor(
        private readonly characterService: CharacterService
    ) { }

    @Get(':name')
    get(@Param('name') name) {
        return this.characterService.findOne(name);
    }
}
