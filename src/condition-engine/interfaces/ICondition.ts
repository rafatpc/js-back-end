import { IRequirement } from './IRequirement';

export interface ICondition {
    check(): boolean;
    getLacking(): IRequirement[] | boolean;
    getSatisfied(): IRequirement[] | boolean;
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
