import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback, StrategyOptions } from 'passport-jwt';

import { JWT_SECRET } from 'src/config';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET,
        } as StrategyOptions);
    }

    async validate(payload: any, done: VerifiedCallback) {
        const user = await this.authService.validateUser(payload);

        if (!user) {
            return done(
                new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED),
                false
            );
        }

        return done(null, user, payload.iat);
    }
}
