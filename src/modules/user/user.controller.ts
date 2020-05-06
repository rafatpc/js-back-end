import { Controller, Put, HttpCode, Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { MEMB_INFO } from '../../database/memb-info.entity';

import { AuthService } from '../auth/auth.service';
import { GuestGuard } from '../auth/guest.guard';
import { UserService } from './user.service';
import { LoginDto } from './user.dto';
import { CreateDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) { }

    @Put()
    @HttpCode(201)
    @UseGuards(GuestGuard)
    register(@Body() params: CreateDto): Promise<MEMB_INFO> {
        return this.userService.create(params);
    }

    @Post('login')
    @UseGuards(GuestGuard)
    async login(@Body() params: LoginDto) {
        const user = await this.userService.login(params);
        const token = await this.authService.signPayload(params);

        return {
            user,
            token
        };
    }

    @Post('verify')
    @HttpCode(202)
    @UseGuards(AuthGuard('jwt'))
    verify() {
        // Verification route is guarded by the Auth Middleware
        // If the middleware verify the token successfuly, then the user is good to go!
    }
}
