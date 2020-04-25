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

    @Put()
    @HttpCode(201)
    register(@Body() params: CreateDto): Promise<MEMB_INFO> {
        return this.userService.create(params);
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

    @Post('verify')
    @HttpCode(202)
    verify() {
        // Verification route is guarded by the Auth Middleware
        // If the middleware verify the token successfuly, then the user is good to go!
    }
}
