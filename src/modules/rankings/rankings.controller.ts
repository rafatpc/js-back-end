import { Controller, Get, Param } from '@nestjs/common';
import { RankingsService } from './rankings.service';
import { Character } from 'src/database/character.entity';
import { OnlineCharacter } from 'src/types/rankings.types';

@Controller('rankings')
export class RankingsController {
    constructor(
        private readonly rankingsService: RankingsService
    ) { }

    @Get('characters')
    characters(): Promise<Character[]> {
        return this.rankingsService.getCharactersRankings();
    }

    @Get('online')
    online(): Promise<OnlineCharacter[]> {
        return this.rankingsService.getOnlineCharacters();
    }
}
