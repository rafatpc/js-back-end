import { Length, IsEmail } from 'class-validator';

export class LoginDto {
    @Length(4, 10)
    readonly username: string;

    @Length(4, 10)
    readonly password: string;
}

export class CreateDto {
    @Length(4, 10)
    readonly username: string;

    @Length(4, 10)
    readonly password: string;

    @IsEmail()
    readonly email: string;
}

export class SearchDto {
    @Length(4, 10)
    readonly username: string;

    @IsEmail()
    readonly email: string;
}
