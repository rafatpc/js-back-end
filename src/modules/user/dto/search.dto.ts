import { Length, IsEmail } from 'class-validator';

export class SearchDto {
    @Length(4, 10)
    readonly username: string;

    @IsEmail()
    readonly email: string;
}
