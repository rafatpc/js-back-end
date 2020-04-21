import "reflect-metadata";

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService, UserRepository } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		TypeOrmModule.forFeature([
			UserRepository
		])
	],
	controllers: [
		UserController
	],
	providers: [
		UserService
	]
})
export class AppModule { }
