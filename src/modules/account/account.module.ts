import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from '../../middleware/auth.middleware'
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
    imports: [],
    controllers: [AccountController],
    providers: [AccountService]
})
export class AccountModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(AccountController)
    }
}

