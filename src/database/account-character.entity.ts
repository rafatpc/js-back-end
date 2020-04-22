import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class AccountCharacter {
    @Column({ type: 'int' })
    Number: number;

    @PrimaryColumn({ type: 'nvarchar', length: 10 })
    Id: string;

    @Column({ type: 'nvarchar', length: 10 })
    GameID1: string;

    @Column({ type: 'nvarchar', length: 10 })
    GameID2: string;

    @Column({ type: 'nvarchar', length: 10 })
    GameID3: string;

    @Column({ type: 'nvarchar', length: 10 })
    GameID4: string;

    @Column({ type: 'nvarchar', length: 10 })
    GameID5: string;

    @Column({ type: 'nvarchar', length: 10 })
    GameIDC: string;
}
