import { Items } from 'src/database/dpweb/items.entity';
import { Sockets } from 'src/database/dpweb/sockets.entity';

export class ItemConfig {
    constructor(public Items: Items[], public Sockets: Sockets[]) { }
}
