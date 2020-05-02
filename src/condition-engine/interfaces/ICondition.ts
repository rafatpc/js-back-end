import { IRequirement } from './IRequirement';
import { IRrequirementError } from './IRequirementError';

export interface ICondition {
    fullfil(): boolean;
    getErrors(): IRrequirementError[];
    // TODO: Remove those from here!
    configure(config: IRequirement[]);
    consume(providers: any);
}

export interface IConditionConfigurable {
    configure(config: IRequirement[]);
}

export interface IConditionConsumes {
    consume(providers: any);
}

export enum IConditionInterfaces {
    IConditionConfigurable = 'configure',
    IConditionConsumes = 'consume'
}
