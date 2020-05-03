import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { CharacterService } from '../character/character.service';

@Controller('account')
export class AccountController {
    constructor(
        private accountService: AccountService,
        private characterService: CharacterService
    ) { }

    @Get('characters')
    characters() {
        return this.accountService.getCharacters();
    }

    @Get('character/:name')
    character(@Param('name') name: string) {
        return this.characterService.findOne(name);
    }
}
