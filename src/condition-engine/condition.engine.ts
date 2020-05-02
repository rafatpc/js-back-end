import { NotAcceptableException, NotFoundException } from '@nestjs/common';

import { ICondition } from './interfaces/ICondition';
import { IConditionConfig } from './interfaces/IConditionConfig';
import { IRequirement } from './interfaces/IRequirement';
import { IRrequirementError } from './interfaces/IRequirementError';

import Conditions from './config';

export class ConditionEngine {
    private config: IConditionConfig[];
    private providers: any;
    private conditions: ICondition[];

    constructor(config: IConditionConfig[], providers) {
        // TODO: Get config from configKey
        // TODO: Get requirements by config
        this.config = config;
        this.providers = providers;

        this.createConditions();
    }

    validate() {
        const errors: IRrequirementError[] = this.conditions.reduce((errors, condition) => {
            // TODO: Check if IConditionConsumes is implemented
            condition.consume(this.providers);
            condition.fullfil();

            return [
                ...errors,
                ...condition.getErrors()
            ]
        }, []);

        if (errors.length !== 0) {
            throw new NotAcceptableException({ message: errors, name: 'ConditionException' });
        }

        return true;
    }

    private createConditions() {
        this.conditions = this.config.map((config: IConditionConfig) => {
            const { type, requirements } = config;
            const condition = this.getCondition(type, requirements);

            // TODO: Check if IConditionConfigurable is implemented
            condition.configure(requirements);

            return condition;
        });
    }

    private getCondition(type: string, requirements: IRequirement[]): ICondition {
        if (!Conditions[type]) {
            throw new NotFoundException(`Cannot find condition ${type}`);
        }

        return new Conditions[type](requirements);
    }
}
