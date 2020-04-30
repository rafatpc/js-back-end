import { Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { MEMB_STAT } from './memb-stat.entity';
import { Character } from './character.entity';
import { Exclude } from 'class-transformer';

@Entity('AccountCharacter')
export class CharacterStatus {
    @PrimaryColumn({ type: 'nvarchar', name: 'GameIDC' })
    Name: string;

    @OneToOne(() => Character, C => C.Name)
    @JoinColumn({ name: 'GameIDC' })
    GameIDC: number;

    @OneToOne(() => MEMB_STAT, MS => MS.ConnectStat, { eager: true })
    @JoinColumn({ name: 'Id' })
    Stat: MEMB_STAT
}
