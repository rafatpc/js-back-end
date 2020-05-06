import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MEMB_INFO } from '../../database/memb-info.entity'
import { UserRepository } from './user.repository';
import { LoginDto } from './user.dto';
import { CreateDto } from './user.dto';
import { SearchDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private usersRepository: Repository<MEMB_INFO>
    ) { }

    findOne({ username: memb___id, email: mail_addr }: Partial<SearchDto>): Promise<MEMB_INFO> {
        const where = [
            { memb___id }
        ];

        if (mail_addr) {
            where.push({ mail_addr } as any);
        }

        return this.usersRepository.findOne({ where });
    }

    async create({ username: memb___id, password: memb__pwd, email: mail_addr }: CreateDto): Promise<MEMB_INFO> {
        const existingUser = await this.findOne({ username: memb___id, email: mail_addr } as SearchDto);

        if (existingUser) {
            throw new HttpException('Username or email are already taken.', 409)
        }

        const account = this.usersRepository.create({
            memb___id,
            memb__pwd,
            mail_addr
        });

        return await this.usersRepository.save(account);
    }

    async login({ username: memb___id, password: memb__pwd }: LoginDto): Promise<MEMB_INFO> {
        const user = await this.usersRepository.findOne({ memb___id, memb__pwd });

        if (!user) {
            throw new HttpException('Invalid username or password', HttpStatus.UNAUTHORIZED);
        }

        return user;
    }
}

