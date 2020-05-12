import { RESET_CONDITIONS_MOCK, RESET_REWARDS_MOCK } from 'src/condition-engine/mocks';

import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectConnection } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';

import { ConditionEngine } from 'src/condition-engine/condition.engine';
import { MEMB_STAT } from 'src/database/memb-stat.entity';
import { MEMB_INFO } from 'src/database/memb-info.entity';

import { CharacterService } from '../character/character.service';
import { User } from '../user/user.decorator';
import { AccountService } from './account.service';

@Controller('account')
@UseGuards(AuthGuard('jwt'))
export class AccountController {
    private status: Repository<MEMB_STAT>;

    constructor(
        @InjectConnection() private connection: Connection,
        private readonly characterService: CharacterService,
        private accountService: AccountService
    ) {
        this.status = this.connection.getRepository(MEMB_STAT);
    }

    @Get('characters')
    characters(@User() user: MEMB_INFO) {
        return this.accountService.getCharacters(user.memb___id);
    }

    @Get('character/:name')
    character(@User() user: MEMB_INFO, @Param('name') name: string) {
        console.log(user.memb___id);

        return this.accountService.getCharacter(user.memb___id, name);
    }

    // TODO: Verify that the character belongs to the account!
    @Post('character/:name/:module')
    @UseGuards(AuthGuard('jwt'))
    async module(@Param('name') name) {
        const Character = await this.characterService.findOne(name);
        const Status = await this.status.findOne(Character.AccountID);

        const conditions = new ConditionEngine(RESET_CONDITIONS_MOCK, {
            Character, Status
        });

        return conditions.satisfy();
    }

    // TODO: Verify that the character belongs to the account!
    @Get('character/:name/:module')
    @UseGuards(AuthGuard('jwt'))
    async moduleConfig(@Param('name') name) {
        const Character = await this.characterService.findOne(name);
        const Status = await this.status.findOne(Character.AccountID);

        const conditions = new ConditionEngine(RESET_CONDITIONS_MOCK, {
            Character, Status
        });

        const result = conditions.check();

        return {
            conditions: result,
            rewards: RESET_REWARDS_MOCK
        };
    }
}
