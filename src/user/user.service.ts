import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { EntityRepository, Repository } from 'typeorm';
// import { MEMB_INFO } from '../database/memb_info.entity'

// @EntityRepository(MEMB_INFO)
// export class UserRepository extends Repository<MEMB_INFO> { }

@Injectable()
export class UserService {
	constructor(
		// @InjectRepository(UserRepository)
		// private usersRepository: Repository<MEMB_INFO>,
	) { }

	findAll(): Promise<any[]> {
		return Promise.resolve(['findAll', 'method'])
		// return this.usersRepository.find();
	}

	findOne(memb___id: string): Promise<any> {
		return Promise.resolve('findOne')
		// return this.usersRepository.findOne(memb___id);
	}
}
