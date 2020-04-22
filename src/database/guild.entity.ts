import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from 'typeorm';
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
            // The G_Mark uses single hex bit value
            // Transform them to double hex bit, to property support Buffer
            from: mark => {
                const markString = mark.toString('hex');
                const appendBit = bit => '0' + bit;
                const hex = Array.from(markString).map(appendBit);
                return Buffer.from(hex);
            }
        }

    })
    G_Mark: Buffer;

    @Column({ type: 'int' })
    G_Count: string;

    @Column({ type: 'int' })
    G_Score: string;

    @Column({ type: 'nvarchar', length: 60 })
    G_Notice: string;

    @OneToMany(() => GuildMember, member => member.G_Name)
    @JoinColumn({ name: 'G_Name' })
    G_Members: GuildMember[]
}
