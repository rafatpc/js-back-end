import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { MEMB_INFO } from 'src/database/memb-info.entity';
import { User } from '../user/user.decorator';
import { AccountService } from './account.service';

@Controller('account')
@UseGuards(AuthGuard('jwt'))
export class AccountController {
    constructor(
        private accountService: AccountService
    ) { }

    @Get('characters')
    characters(@User() user: MEMB_INFO) {
        return this.accountService.getCharacters(user.memb___id);
    }

    @Get('character/:name')
    character(@User() user: MEMB_INFO, @Param('name') name: string) {
        console.log(user.memb___id);

        return this.accountService.getCharacter(user.memb___id, name);
    }
}
