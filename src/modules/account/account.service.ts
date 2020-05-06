import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { AccountCharacter } from 'src/database/account-character.entity';
import { Character } from 'src/database/character.entity';

@Injectable()
export class AccountService {
    private accounts: Repository<AccountCharacter>;
    private characters: Repository<Character>;
    private user: AccountCharacter;

    constructor(
        @InjectConnection() private connection: Connection
    ) {
        this.accounts = this.connection.getRepository(AccountCharacter);
        this.characters = this.connection.getRepository(Character);
    }

    getCharacters(user: string) {
        return this.accounts.createQueryBuilder('Account')
            .leftJoinAndMapMany('Account.Characters', 'Character', 'Character', 'Account.Id=Character.AccountID')
            .select([
                'Account.Id',
                'Account.GameIDC',
                'Character.Name',
                'Character.Class',
            ])
            .where({ 'Id': user })
            .getOne();
    }

    getCharacter(user: string, character: string) {
        return this.characters.createQueryBuilder('Character')
            .where('Name = :Name')
            .andWhere('AccountId = :User')
            .setParameters({
                User: user,
                Name: character
            })
            .getOne()
    }
}
