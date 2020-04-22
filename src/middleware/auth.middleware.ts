import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_MAX_AGE } from '../config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: () => void) {
        const authorization = request.header('Authorization') || '';
        const [header, token] = authorization.match(/Bearer (.*)/) || [];

        try {
            jwt.verify(token, JWT_SECRET, { maxAge: JWT_MAX_AGE });
            next();
        } catch (e) {
            let message = 'Not authorized';

            if (e.name === 'TokenExpiredError') {
                message = 'Access token has expired'
            }

            throw new HttpException({
                statusCode: HttpStatus.UNAUTHORIZED,
                message,
                name: e.name
            }, HttpStatus.UNAUTHORIZED);
        }
    }
}
