import { Length } from 'class-validator';

export class LoginDto {
    @Length(4, 10)
    readonly username: string;

    @Length(4, 10)
    readonly password: string;
}
