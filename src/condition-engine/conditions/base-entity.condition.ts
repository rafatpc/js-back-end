import { ICondition } from '../interfaces/ICondition';
import { IRequirement } from '../interfaces/IRequirement';
import { IRrequirementError } from '../interfaces/IRequirementError';

import { compare } from '../compare.engine';

export abstract class BaseEntityFieldCondition implements Partial<ICondition> {
    protected failed: IRrequirementError[] = [];
    protected requirements: IRequirement[];
    protected entity: any;

    configure(requirements: IRequirement[]) {
        this.requirements = requirements;
    }

    fullfil() {
        return this.requirements.reduce((fullfil, requirement) => {
            const { type, operator, value } = requirement;
            const actual = this.entity[type];
            const requirementFullfiled = compare(actual, operator, value);

            if (!requirementFullfiled) {
                this.failed.push({ type, actual, value });
            }

            return fullfil && requirementFullfiled;
        }, true);
    }

    getErrors(): IRrequirementError[] {
        return this.failed;
    }
}
