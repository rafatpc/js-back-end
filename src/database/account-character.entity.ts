import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Character } from './character.entity';

@Entity('AccountCharacter')
export class AccountCharacter {
    @Column({ type: 'int' })
    Number: number;

    @PrimaryColumn({ type: 'nvarchar', length: 10 })
    Id: string;

    @Column({ type: 'nvarchar', length: 10 })
    @OneToOne(() => Character, character => character.Name)
    @JoinColumn({ name: 'GameID1' })
    GameID1: string;

    @Column({ type: 'nvarchar', length: 10 })
    @OneToOne(() => Character, character => character.Name)
    @JoinColumn({ name: 'GameID2' })
    GameID2: string;

    @Column({ type: 'nvarchar', length: 10 })
    @OneToOne(() => Character, character => character.Name)
    @JoinColumn({ name: 'GameID3' })
    GameID3: string;

    @Column({ type: 'nvarchar', length: 10 })
    @OneToOne(() => Character, character => character.Name)
    @JoinColumn({ name: 'GameID4' })
    GameID4: string;

    @Column({ type: 'nvarchar', length: 10 })
    @OneToOne(() => Character, character => character.Name)
    @JoinColumn({ name: 'GameID5' })
    GameID5: string;

    @Column({ type: 'nvarchar', length: 10 })
    @OneToOne(() => Character, character => character.Name)
    @JoinColumn({ name: 'GameIDC' })
    GameIDC: string;
}
