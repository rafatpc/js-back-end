import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Inventory } from '../models/inventory.model'
import { GuildMember } from './guild-member.entity';

@Entity()
export class Character {
    @Column({ type: 'nvarchar', length: 10 })
    AccountID: string

    @PrimaryColumn({ type: 'nvarchar', length: 50 })
    Name: string;

    @Column({ type: 'smallint' })
    cLevel: number;

    @Column({ type: 'int' })
    Resets: number;

    @Column({ type: 'int' })
    GrandResets: number;

    @Column({ type: 'int' })
    Honor: number;

    @Column({ type: 'int' })
    LevelUpPoint: number;

    @Column({ type: 'tinyint' })
    Class: number;

    @Column({ type: 'int' })
    Experience: number;

    @Column({ type: 'int' })
    Strength: number;

    @Column({ type: 'int' })
    Dexterity: number;

    @Column({ type: 'int' })
    Vitality: number;

    @Column({ type: 'int' })
    Energy: number;

    @Column({ type: 'int' })
    Leadership: number;

    @Column({
        type: 'varbinary',
        length: 760,
        transformer: {
            to: items => items,
            from: items => {
                return new Inventory(items);
            }
        }
    })
    Inventory: Inventory;

    @Column({ type: 'varbinary', length: 60 })
    MagicList: Buffer;

    @Column({ type: 'int' })
    Money: number;

    @Column({ type: 'real' })
    Life: number;

    @Column({ type: 'real' })
    MaxLife: number;

    @Column({ type: 'real' })
    Mana: number;

    @Column({ type: 'real' })
    MaxMana: number;

    @Column({ type: 'smallint' })
    MapNumber: number;

    @Column({ type: 'smallint' })
    MapPosX: number;

    @Column({ type: 'smallint' })
    MapPosY: number;

    @Column({ type: 'tinyint' })
    MapDir: number;

    @Column({ type: 'int' })
    PkCount: number;

    @Column({ type: 'int' })
    PkLevel: number;

    @Column({ type: 'smalldatetime' })
    MDate: Date;

    @Column({ type: 'smalldatetime' })
    LDate: Date;

    @Column({ type: 'tinyint' })
    CtlCode: number;

    @Column({ type: 'tinyint' })
    DbVersion: number;

    @Column({ type: 'varbinary', length: 50 })
    Quest: Buffer;

    @OneToOne(() => GuildMember, { deferrable: 'INITIALLY DEFERRED' })
    @JoinColumn({ name: 'Name' })
    Guild: GuildMember
}
