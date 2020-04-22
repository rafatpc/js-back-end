import { Item } from './item.model';
import { Exclude, Expose } from 'class-transformer';
import { Storage } from './storage.model';

@Exclude()
export class Inventory extends Storage {
    @Expose()
    public readonly Equipped: Array<Item>;

    @Expose()
    public readonly Storage: Array<Item>;

    constructor(data: Buffer) {
        super(data);

        this.Equipped = this.Items.splice(0, 12);
        this.Storage = this.Items;
    }
}
