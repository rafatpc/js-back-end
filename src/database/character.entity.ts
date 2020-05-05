import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Inventory } from '../models/inventory.model'
import { GuildMember } from './guild-member.entity';
import { MasterSkillTree } from './master-skill-tree.entity';
import { Transform, Type, Exclude } from 'class-transformer';
import { CharacterStatus } from './character-status.entity';

@Entity()
export class Character {
    @Column({ type: 'nvarchar', length: 10 })
    @Exclude()
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
            from: items => new Inventory(items)
        }
    })
    @Transform((Data: Inventory) => Data.toJSON())
    Inventory: Inventory;

    @Column({ type: 'int' })
    Money: number;

    @Column({ type: 'smallint' })
    MapNumber: number;

    @Column({ type: 'smallint' })
    MapPosX: number;

    @Column({ type: 'smallint' })
    MapPosY: number;

    @Column({ type: 'int' })
    PkCount: number;

    @Column({ type: 'int' })
    PkLevel: number;

    @Column({ type: 'tinyint' })
    CtlCode: number;

    @OneToOne(() => GuildMember)
    @JoinColumn({ name: 'Name' })
    Guild: GuildMember;

    @OneToOne(() => MasterSkillTree)
    @JoinColumn({ name: 'Name' })
    @Transform((Data: MasterSkillTree) => ({
        Level: Data?.MasterLevel,
        Points: Data?.MasterPoint
    }))
    Master: MasterSkillTree;

    @OneToOne(() => CharacterStatus, { eager: true })
    @JoinColumn({ name: 'Name' })
    @Transform(Character.isOnline)
    Online: CharacterStatus;

    static isOnline(Data: CharacterStatus) {
        if (!Data) {
            return false;
        }

        return Data.Stat.ConnectStat === 1;
    }
}
