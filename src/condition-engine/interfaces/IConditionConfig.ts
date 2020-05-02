import { IRequirement } from "./IRequirement";

export type IConditionConfig = {
    type: string;
    requirements: IRequirement[];
};
