import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [SharedModule],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
