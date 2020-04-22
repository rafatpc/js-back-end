import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Guild } from './guild.entity';

@Entity('GuildMember')
export class GuildMember {
    @PrimaryColumn({ type: 'nvarchar', length: 10 })
    Name: number

    @Column({ type: 'nvarchar', length: 50, select: false })
    @ManyToOne(() => Guild, guild => guild.G_Name)
    @JoinColumn({ name: 'G_Name' })
    G_Name: Guild

    @Column({ type: 'tinyint' })
    G_Level: number;
}
