import { Length, IsEmail } from 'class-validator';

export class CreateDto {
    @Length(4, 10)
    readonly username: string;

    @Length(4, 10)
    readonly password: string;

    @IsEmail()
    readonly email: string;
}
