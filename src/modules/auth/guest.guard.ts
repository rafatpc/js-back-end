import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';;
import { Request } from 'express';

@Injectable()
export class GuestGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const authorization = request.header('Authorization') || '';
        const [header, token] = authorization.match(/Bearer (.*)/) || [];
        return !token;
    }
}
