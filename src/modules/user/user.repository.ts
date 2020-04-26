
import { EntityRepository, Repository } from 'typeorm';
import { MEMB_INFO } from '../../database/memb-info.entity';

@EntityRepository(MEMB_INFO)
export class UserRepository extends Repository<MEMB_INFO> { }
