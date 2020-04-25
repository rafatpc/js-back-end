import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { AuthMiddleware } from '../../middleware/auth.middleware'
import { GuestMiddleware } from '../../middleware/guest.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {
    private verifyRoute: RouteInfo = {
        path: 'user/verify', method: RequestMethod.POST
    };

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(this.verifyRoute)
        consumer.apply(GuestMiddleware).exclude(this.verifyRoute).forRoutes(UserController);
    }
}

