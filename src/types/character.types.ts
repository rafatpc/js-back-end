import { DecodedItem } from './items.type';

export type DecodedInventory = {
    Equipped: DecodedItem[];
    Storage: DecodedItem[];
};
