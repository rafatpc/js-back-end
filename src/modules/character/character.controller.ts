import { RESET_CONDITIONS_MOCK, RESET_REWARDS_MOCK } from 'src/condition-engine/mocks';

import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectConnection } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';

import { MEMB_STAT } from 'src/database/memb-stat.entity';
import { Character } from 'src/database/character.entity';
import { ConditionEngine } from 'src/condition-engine/condition.engine';

import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
    private status: Repository<MEMB_STAT>;

    constructor(
        private readonly characterService: CharacterService,
        @InjectConnection() private connection: Connection
    ) {
        this.status = this.connection.getRepository(MEMB_STAT);
    }

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
    @UseGuards(AuthGuard('jwt'))
    extended(@Param('name') name): Promise<Character> {
        return this.characterService.findOne(name);
    }

    // TODO: Verify that the character belongs to the account!
    @Post(':name/:module')
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
    @Get(':name/:module')
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
