import { Item } from './item.model';
import { Exclude } from 'class-transformer';
import { ITEM_HEX_LENGTH } from 'src/config';

@Exclude()
export class Storage {
    protected readonly Items: Array<Item>;
    private readonly data: Buffer;

    constructor(data: Buffer) {
        this.data = data;
        this.Items = this.getItemsHex().map((item, slot) => new Item(item, slot));
    }

    private getItemsHex() {
        // Convert the Buffer to Hex string
        const hexString = this.data.toString('hex');
        // Matches this.hexLength characters :)
        const matcher = new RegExp(`.{1,${ITEM_HEX_LENGTH}}`, 'g');
        // Return the matched items
        return hexString.match(matcher);
    }
}
