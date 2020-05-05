import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { Items } from 'src/database/dpweb/items.entity';
import { Sets } from 'src/database/dpweb/sets.entity';
import { SetItems } from 'src/database/dpweb/set-items.entity';
import { Sockets } from 'src/database/dpweb/sockets.entity';

@Injectable()
export class ConfigService {
    private items: Repository<Items>;
    private sockets: Repository<Sockets>;
    private sets: Repository<Sets>;
    private setItems: Repository<SetItems>;

    constructor(
        @InjectConnection()
        private connection: Connection
    ) {
        this.items = this.connection.getRepository(Items);
        this.sockets = this.connection.getRepository(Sockets);
        this.sets = this.connection.getRepository(Sets);
        this.setItems = this.connection.getRepository(SetItems);
    }

    getItems(): Promise<Items[]> {
        return this.items.find();
    }

    getSockets(): Promise<Sockets[]> {
        return this.sockets.find();
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
