import { Item } from './item.model';
import { Exclude } from 'class-transformer';

@Exclude()
export class Storage {
    protected readonly Items: Array<Item>;

    private readonly data: Buffer;

    // TODO: Expose that for editing?
    private readonly hexLength = 20;

    constructor(data: Buffer) {
        // TODO: Data validation (e.g. buffer.length % 10 !== 0)
        this.data = data;
        this.Items = this.getItemsHex().map(item => new Item(item));
    }

    private getItemsHex() {
        // Convert the Buffer to Hex string
        const hexString = this.data.toString('hex');
        // Matches this.hexLength characters :)
        const matcher = new RegExp(`.{1,${this.hexLength}}`, 'g');
        // Return the matched items
        return hexString.match(matcher);
    }
}
