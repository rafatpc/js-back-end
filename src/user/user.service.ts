import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';
import { MEMB_INFO } from '../database/memb_info.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private usersRepository: Repository<MEMB_INFO>
    ) { }

    findAll(): Promise<MEMB_INFO[]> {
        return this.usersRepository.find();
    }

    findOne(memb___id: string): Promise<MEMB_INFO> {
        return this.usersRepository.findOne(memb___id);
    }

    async create(memb___id: string, memb__pwd: string, mail_addr: string): Promise<MEMB_INFO> {
        if (await this.exists(memb___id, mail_addr)) {
            throw new HttpException('Username or email are already taken.', 409)
        }

        const account = this.usersRepository.create({
            memb___id,
            memb__pwd,
            mail_addr
        });

        return await this.usersRepository.save(account);
    }

    async exists(memb___id: string, mail_addr?: string): Promise<boolean> {
        const where = [
            { memb___id }
        ];

        if (mail_addr) {
            where.push({ mail_addr } as any);
        }

        return this.usersRepository.find({ where }).then(matches => {
            return matches.length > 0;
        });
    }
}

