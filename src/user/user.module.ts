import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserRepository, UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule { }
