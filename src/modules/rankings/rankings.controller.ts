import { Controller, Get, Param } from '@nestjs/common';
import { Character } from 'src/database/character.entity';
import { RankingsService } from './rankings.service';

@Controller('rankings')
export class RankingsController {
    constructor(
        private readonly rankingsService: RankingsService
    ) { }

    @Get('characters')
    async get(): Promise<Character[]> {
        return await this.rankingsService.getCharactersRankings();
    }
}
