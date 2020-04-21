import { Controller, Get, Put, HttpCode, Param, Body } from '@nestjs/common';
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

    @Put()
    @HttpCode(201)
    async register(@Body() params): Promise<MEMB_INFO> {
        const {
            username,
            password,
            email
        } = params;

        return await this.userService.create(username, password, email);
    }
}
