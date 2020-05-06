import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../auth/auth.service';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [UserController],
    providers: [
        AuthService,
        UserService
    ]
})
export class UserModule { }
