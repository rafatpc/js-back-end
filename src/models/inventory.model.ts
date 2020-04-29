import { Item } from './item.model';
import { Exclude, Expose } from 'class-transformer';
import { Storage } from './storage.model';
import { DecodedInventory } from 'src/types/character.types';

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

    toJSON(): DecodedInventory {
        return {
            Equipped: this.Equipped.map(Item => Item.toJSON()).filter(Item => Item !== null),
            Storage: this.Storage.map(Item => Item.toJSON()).filter(Item => Item !== null)
        };
    }
}
