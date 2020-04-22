import { Entity, PrimaryColumn, Column } from 'typeorm';

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
    LevelUpPoint: number;

    @Column({ type: 'tinyint' })
    Class: number;

    @Column({ type: 'int' })
    Experience: number;

    @Column({ type: 'smallint' })
    Strength: number;

    @Column({ type: 'smallint' })
    Dexterity: number;

    @Column({ type: 'smallint' })
    Vitality: number;

    @Column({ type: 'smallint' })
    Energy: number;

    @Column({ type: 'varbinary', length: 760 })
    Inventory: Buffer;

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

    @Column({ type: 'int' })
    IsMarried: number;

    @Column({ type: 'nvarchar' })
    MarryName: number;

    @Column({ type: 'int' })
    QuestNumber: number;

    @Column({ type: 'int' })
    QuestMonsters: number;

    @Column({ type: 'int' })
    QuestInCurse: number;

    @Column({ type: 'int' })
    BanPost: number;

    @Column({ type: 'int' })
    SkyEventWins: number;

    @Column({ type: 'int' })
    IsVip: number;

    @Column({ type: 'int' })
    VipExpirationTime: number;
}
