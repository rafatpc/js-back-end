import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { GuildMember } from './guild-member.entity';

@Entity()
export class Guild {
    @Column({ type: 'int' })
    Number: number

    @PrimaryColumn({ type: 'nvarchar', length: 50 })
    G_Name: string;

    @Column({ type: 'nvarchar', length: 10 })
    G_Master: string;

    @Column({
        type: 'varbinary',
        length: 32,
        transformer: {
            to: mark => mark,
            from: mark => '0x' + mark.toString('hex')
        }

    })
    G_Mark: Buffer;

    @Column({ type: 'int' })
    G_Count: number;

    @Column({ type: 'int' })
    G_Score: number;

    @Column({ type: 'nvarchar', length: 60 })
    G_Notice: string;

    @Column({ type: 'int' })
    G_Type: number;

    @Column({ type: 'int' })
    G_Rival: number;

    @Column({ type: 'int' })
    G_Union: number;

    @OneToMany(() => GuildMember, member => member.G_Name)
    @JoinColumn({ name: 'G_Name' })
    G_Members: GuildMember[];
}

@Entity('Guild')
export class Alliance {
    @ManyToOne(() => Guild, guild => guild.G_Union)
    @JoinColumn({ name: 'G_Union', referencedColumnName: 'G_Union' })
    G_Union: number;

    @PrimaryColumn({ type: 'nvarchar', length: 50 })
    G_Name: string;

    @Column({ type: 'nvarchar', length: 10 })
    G_Master: string;
}

// TODO: G_Rival is 0 by default...causing all guilds to be rival: D
@Entity('Guild')
export class Rivalry {
    @ManyToOne(() => Guild, guild => guild.G_Rival)
    @JoinColumn({ name: 'G_Rival', referencedColumnName: 'G_Rival' })
    G_Rival: number;

    @PrimaryColumn({ type: 'nvarchar', length: 50 })
    G_Name: string;

    @Column({ type: 'nvarchar', length: 10 })
    G_Master: string;
}
