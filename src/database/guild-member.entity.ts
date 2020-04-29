import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Guild } from './guild.entity';
import { Character } from './character.entity';

@Entity('GuildMember')
export class GuildMember {
    @PrimaryColumn({ type: 'nvarchar', length: 10 })
    @OneToOne(() => Character)
    @JoinColumn({ name: 'Name' })
    Name: number

    @Column({ type: 'nvarchar', length: 50 })
    @ManyToOne(() => Guild, guild => guild.G_Name)
    @JoinColumn({ name: 'G_Name' })
    G_Name: Guild

    @Column({ type: 'tinyint' })
    G_Status: number;
}
