import { NotAcceptableException, NotFoundException } from '@nestjs/common';

import { ICondition } from './interfaces/ICondition';
import { IConditionConfig } from './interfaces/IConditionConfig';
import { IConditionMap } from './interfaces/IConditionMap';
import { IRequirement } from './interfaces/IRequirement';

import Conditions from './config';

export class ConditionEngine {
    private config: IConditionConfig[];
    private providers: any;
    private conditions: IConditionMap[];

    constructor(config: IConditionConfig[], providers) {
        // TODO: Get config from configKey
        // TODO: Get requirements by config
        this.config = config;
        this.providers = providers;

        this.configure();
    }

    satisfy(): boolean {
        const errors = this.check();

        if (errors.length !== 0) {
            throw new NotAcceptableException({ message: errors, name: 'ConditionException' });
        }

        return true;
    }

    check(): IRequirement[] {
        return this.conditions.reduce((errors, condition) => {
            const { instance, type } = condition;

            // TODO: Check if IConditionConsumes is implemented
            instance.consume(this.providers);
            instance.check();

            return [
                ...errors,
                {
                    type,
                    satisfied: instance.getSatisfied(),
                    lacking: instance.getLacking()
                }
            ]
        }, []);
    }

    private configure() {
        this.conditions = this.config.map((config: IConditionConfig) => {
            const { type, requirements } = config;
            const instance = this.instantiate(type, requirements);

            // TODO: Check if IConditionConfigurable is implemented
            instance.configure(requirements);

            return { type, instance };
        });
    }

    private instantiate(type: string, requirements: IRequirement[]): ICondition {
        if (!Conditions[type]) {
            throw new NotFoundException(`Cannot find condition ${type}`);
        }

        return new Conditions[type](requirements);
    }
}
