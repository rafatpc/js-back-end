import { IOperator } from "./IOperator";

export type IRequirement = {
    type: string;
    operator: IOperator;
    value: any;
    actual?: any;
    message?: string;
};
