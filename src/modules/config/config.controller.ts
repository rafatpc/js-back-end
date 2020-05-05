import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ItemConfig } from './config.models';

@Controller('config')
export class ConfigController {
    constructor(
        private readonly configService: ConfigService
    ) { }

    @Get('items')
    async items(): Promise<ItemConfig> {
        const Items = await this.configService.getItems();
        const Sockets = await this.configService.getSockets();

        return new ItemConfig(Items, Sockets);
    }
}
