import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) { }

    @Get('characters')
    characters() {
        return this.accountService.getCharacters();
    }

    @Get('character/:name')
    character(@Param('name') name: string) {
        return this.accountService.getCharacter(name);
    }
}
