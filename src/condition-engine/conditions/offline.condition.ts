import { BadRequestException } from '@nestjs/common';

import { MEMB_STAT } from 'src/database/memb-stat.entity';

import { ICondition } from '../interfaces/ICondition';
import { IRequirement } from '../interfaces/IRequirement';

export class OfflineCondition implements ICondition {
    private satisfied: boolean = false;
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

    check() {
        return this.satisfied = this.entity.ConnectStat === 0;
    }

    getLacking(): boolean {
        return !this.satisfied;
    }

    getSatisfied(): boolean {
        return this.satisfied;
    }
}
