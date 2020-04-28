import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('DPWebShop_Items')
export class Items {
    @PrimaryColumn({ type: 'int' })
    WS_Id: number;

    @Column({ type: 'int' })
    WS_Category: number;

    @Column({ type: 'int' })
    WS_Hidden: number;

    @Column({ type: 'int' })
    Type: number;

    @Column({ type: 'int' })
    Id: number;

    @Column({ type: 'int' })
    Skill: number;

    @Column({ type: 'int' })
    X: number;

    @Column({ type: 'int' })
    Y: number;

    @Column({ type: 'int' })
    Serial: number;

    @Column({ type: 'int' })
    Option: number;

    @Column({ type: 'nvarchar', length: 50 })
    Name: string;

    @Column({ type: 'int' })
    Level: number;

    @Column({ type: 'int' })
    Durability: number;

    @Column({ type: 'int' })
    ReqLevel: number;

    @Column({ type: 'int' })
    Strength: number;

    @Column({ type: 'int' })
    Dexterity: number;

    @Column({ type: 'int' })
    Energy: number;

    @Column({ type: 'int' })
    Vitality: number;

    @Column({ type: 'int' })
    Leadership: number;

    @Column({ type: 'int' })
    Wizard: number;

    @Column({ type: 'int' })
    Knight: number;

    @Column({ type: 'int' })
    Elf: number;

    @Column({ type: 'int' })
    Gladiator: number;

    @Column({ type: 'int' })
    Lord: number;

    @Column({ type: 'int' })
    Summoner: number;
}
