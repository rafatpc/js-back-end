import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class GuestMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: () => void) {
        const authorization = request.header('Authorization') || '';
        const [header, token] = authorization.match(/Bearer (.*)/) || [];

        if (token) {
            throw new HttpException('This page cannot be used by existing users.', HttpStatus.UNAUTHORIZED);
            return;
        }

        next();
    }
}
