import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CharacterService } from '../character/character.service';
import { AccountService } from './account.service';

@Controller('account')
@UseGuards(AuthGuard('jwt'))
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
