import { MEMB_INFO } from '../database/memb_info.entity'
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MEMB_INFO)
export class UserRepository extends Repository<MEMB_INFO> { }
