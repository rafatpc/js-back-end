import { ICondition } from '../interfaces/ICondition';
import { IRequirement } from '../interfaces/IRequirement';
import { IRrequirementError } from '../interfaces/IRequirementError';

import { MEMB_STAT } from 'src/database/memb-stat.entity';
import { BadRequestException } from '@nestjs/common';

export class OfflineCondition implements ICondition {
    private failed: IRrequirementError[] = [];
    private requirements: IRequirement[];
    private entity: any;

    consume({ Status }: {
        Status: MEMB_STAT
    }) {
        if (!(Status instanceof MEMB_STAT)) {
            throw new BadRequestException('OfflineCondition requires Status provider.')
        }

        this.entity = Status;
    }

    configure(requirements: IRequirement[]) {
        this.requirements = requirements;
    }

    fullfil() {
        const isOffline = this.entity.ConnectStat === 0;

        if (!isOffline) {
            this.failed.push({ type: 'ConnectStat', actual: 1, value: 0 });
        }

        return isOffline;
    }

    getErrors(): IRrequirementError[] {
        return this.failed;
    }
}
