import { isBitOn, hexsubstr, EMPTY_ITEM_HEX } from 'src/helpers/item-hex.helpers';
import { RawHexData, DecodedItem, ExcellentOption, SocketOption } from 'src/types/items.type';

export class Item {
    private readonly hex: string;
    private readonly slot: number;

    constructor(hex: string, slot: number) {
        this.hex = hex.toLowerCase();
        this.slot = slot;
    }

    toJSON(): DecodedItem | null {
        if (this.hex === EMPTY_ITEM_HEX) {
            return null;
        }

        const {
            options,
            excellent: excellentRaw,
            sockets: socketsRaw,
            ...rest
        } = this.getRawHexData();

        // Check if Luck or Skill bits are on
        const luck = isBitOn(options, 2);
        const skill = isBitOn(options, 7);

        // Get Level
        const level = options >> 3 & 0b1111;

        // Get the value of Jewel of Life options
        // If 6-th bit of excellent options is true - add +4
        const addOption = isBitOn(excellentRaw, 6) ? 4 : 0;
        const option = (options & 0b11) + addOption;

        // Transform Excellent options
        const excellent: ExcellentOption[] = [0, 1, 2, 3, 4, 5]
            .map(isBitOn.bind(null, excellentRaw));
        // Transform Socket options
        const lastSocketIndex = socketsRaw.findIndex(socket => socket === 0);
        const activeSockets = socketsRaw.slice(0, lastSocketIndex === -1 ? 5 : lastSocketIndex);
        const sockets = activeSockets.map(this.decodeSocket);

        return {
            slot: this.slot,
            ...rest,
            level,
            skill,
            luck,
            option,
            excellent,
            sockets
        };
    }

    private getRawHexData(): RawHexData {
        const hex = this.hex;

        return {
            id: hexsubstr(hex, 0, 2),
            options: hexsubstr(hex, 2, 2),
            durability: hexsubstr(hex, 4, 2),
            serial: hex.substr(6, 8),
            excellent: hexsubstr(hex, 14, 2),
            ancient: hexsubstr(hex, 17, 1),
            group: hexsubstr(hex, 18, 1),
            refinery: hexsubstr(hex, 19, 1),
            harmony: {
                type: hexsubstr(hex, 20, 1),
                level: hexsubstr(hex, 21, 1)
            },
            sockets: [
                hexsubstr(hex, 22, 2),
                hexsubstr(hex, 24, 2),
                hexsubstr(hex, 26, 2),
                hexsubstr(hex, 28, 2),
                hexsubstr(hex, 30, 2),
            ]
        };
    }

    private decodeSocket(value): SocketOption | null {
        if (value === 0 || value === 255) {
            return null;
        }

        if (value === 254) {
            return { type: null, level: null };
        }

        const level = Math.floor(value / 50);
        const type = value % 50;

        return { level, type };
    }
}
