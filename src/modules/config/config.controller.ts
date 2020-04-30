import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';
import { Items } from 'src/database/dpweb/items.entity';

@Controller('config')
export class ConfigController {
    constructor(
        private readonly configService: ConfigService
    ) { }

    @Get('items')
    items(): Promise<Items[]> {
        return this.configService.getItems();
    }

    @Get('test')
    test(): any {
        return this.configService.getItem();
        // return this.configService.getSetItems();
    }
}
