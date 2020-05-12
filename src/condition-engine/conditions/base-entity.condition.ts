import { ICondition } from '../interfaces/ICondition';
import { IRequirement } from '../interfaces/IRequirement';

import { compare } from '../compare.engine';

export abstract class BaseEntityFieldCondition implements Partial<ICondition> {
    protected lacking: IRequirement[] = [];
    protected satisfied: IRequirement[] = [];
    protected requirements: IRequirement[];
    protected entity: any;

    configure(requirements: IRequirement[]) {
        this.requirements = requirements;
    }

    check() {
        return this.requirements.reduce((satisfy, requirement) => {
            const { type, operator, value } = requirement;
            const actual = this.entity[type];
            const satisfied = compare(actual, operator, value);
            const data = { ...requirement, actual };

            if (!satisfied) {
                this.lacking.push(data);
            } else {
                this.satisfied.push(data);
            }

            return satisfy && satisfied;
        }, true);
    }

    getLacking(): IRequirement[] {
        return this.lacking;
    }

    getSatisfied(): IRequirement[] {
        return this.satisfied;
    }
}
