import { IConditionConfig } from "./interfaces/IConditionConfig";

export const RESET_CONDITIONS_MOCK: IConditionConfig[] = [
    {
        type: 'CharacterCondition',
        requirements: [
            { type: 'cLevel', operator: 'GTEQ', value: 400 },
            { type: 'Resets', operator: 'LT', value: 999 },
            { type: 'Money', operator: 'GTEQ', value: 200000000 }
        ]
    },
    {
        type: 'OfflineCondition',
        requirements: []
    }
];

export const RESET_REWARDS_MOCK = [
    {
        type: 'CreditsReward',
        count: 3
    },
    {
        type: 'LevelUpPointsReward',
        count: 500
        /* 
        TODO: Not sure, but:
        count: function (providers) => 500|600|XXX // Based on class?
        */
    },
    {
        type: 'ItemReward',
        count: 1,
        config: [
            { id: 11, type: 14, level: 12 }
        ]
    }
];
