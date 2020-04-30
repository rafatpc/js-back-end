import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { Items } from 'src/database/dpweb/items.entity';
import { Sets } from 'src/database/dpweb/sets.entity';
import { SetItems } from 'src/database/dpweb/set-items.entity';

@Injectable()
export class ConfigService {
    private items: Repository<Items>;
    private sets: Repository<Sets>;
    private setItems: Repository<SetItems>;

    constructor(
        @InjectConnection()
        private connection: Connection
    ) {
        this.items = this.connection.getRepository(Items);
        this.sets = this.connection.getRepository(Sets);
        this.setItems = this.connection.getRepository(SetItems);
    }

    getItems(): Promise<Items[]> {
        return this.items.find();
    }

    getItem(): Promise<Items> {
        return this.items.findOne({
            where: {
                Type: 8,
                Id: 1
            }
        });
    }

    getSets(): Promise<Sets[]> {
        return this.sets.find();
    }

    getSetItems(): Promise<SetItems[]> {
        return this.setItems.find({
            order: {
                Type: 'ASC',
                Id: 'ASC'
            }
        });
    }
}
