import { JWT_SECRET, JWT_MAX_AGE } from '../../config';

import { Injectable } from '@nestjs/common';
import { sign as jwtSign } from 'jsonwebtoken';

import { LoginDto } from '../user/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async validateUser({ username }: LoginDto) {
        return this.userService.login({
            username: 'rafa',
            password: 'password'
        } as LoginDto);
    }

    async signPayload({ username }: LoginDto) {
        return jwtSign({
            username: username
        }, JWT_SECRET, { expiresIn: JWT_MAX_AGE });
    }
}

