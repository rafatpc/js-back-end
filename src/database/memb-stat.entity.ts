import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { AccountCharacter } from './account-character.entity';

@Entity()
export class MEMB_STAT {
    @PrimaryColumn({ type: 'nvarchar', length: 10 })
    memb___id: string;

    @Column({ type: 'tinyint' })
    ConnectStat: number;

    @Column({ type: 'nvarchar', length: 50 })
    ServerName: string;

    @Column({ type: 'nvarchar', length: 15 })
    IP: string;

    @Column({ type: 'smalldatetime' })
    ConnectTM: Date;

    @Column({ type: 'smalldatetime' })
    DisConnectTM: Date;

    @Column({ type: 'int' })
    OnlineHours: number;

    @OneToOne(() => AccountCharacter, AC => AC.Id)
    @JoinColumn({ name: 'memb___id' })
    Account: AccountCharacter
}
