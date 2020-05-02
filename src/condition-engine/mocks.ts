import { IConditionConfig } from "./interfaces/IConditionConfig";

export const RESET_CONDITIONS_MOCK: IConditionConfig[] = [
    {
        type: 'CharacterCondition',
        requirements: [
            { type: 'cLevel', operator: 'EQ', value: 400 },
            { type: 'Resets', operator: 'LT', value: 999 }
        ]
    },
    {
        type: 'OfflineCondition',
        requirements: []
    }
];
