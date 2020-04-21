import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { MEMB_INFO } from '../database/memb_info.entity';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    list(): Promise<MEMB_INFO[]> {
        return this.userService.findAll();
    }

    @Get(':name')
    single(@Param('name') name): Promise<MEMB_INFO> {
        return this.userService.findOne(name);
    }

    @Post()
    register(@Param() params) {
        console.log('params', params);
    }
}

