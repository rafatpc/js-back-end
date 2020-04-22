import { Controller, Get, Put, HttpCode, Param, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { MEMB_INFO } from '../../database/memb_info.entity';
import { LoginDto } from './dto/login.dto';
import { CreateDto } from './dto/create.dto';
import { SearchDto } from './dto/search.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    list(): Promise<MEMB_INFO[]> {
        return this.userService.findAll();
    }

    @Get(':username')
    single(@Param('username') username): Promise<MEMB_INFO> {
        return this.userService.findOne({ username } as Partial<SearchDto>);
    }

    @Put()
    @HttpCode(201)
    async register(@Body() params: CreateDto): Promise<MEMB_INFO> {
        return await this.userService.create(params);
    }

    @Post('login')
    async login(@Body() params: LoginDto) {
        const user = await this.userService.login(params);
        const token = this.userService.generateToken(params);

        return {
            user,
            token
        };
    }
}
