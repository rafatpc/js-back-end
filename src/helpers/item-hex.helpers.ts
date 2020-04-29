import { ITEM_HEX_LENGTH } from 'src/config';

export const EMPTY_ITEM_HEX: string = 'f'.repeat(ITEM_HEX_LENGTH);

export function isHexValid(hex: string): boolean {
    hex = hex.toLowerCase();
    const regex = new RegExp(`^[a-f0-9]{${ITEM_HEX_LENGTH}}$`)
    return hex.match(regex) && hex !== EMPTY_ITEM_HEX;
};

export function hexsubstr(hex, start, length) {
    return parseInt(hex.substr(start, length), 16);
};

export function isBitOn(number, bit): boolean {
    return (number >> bit & 0b1) === 1;
};
