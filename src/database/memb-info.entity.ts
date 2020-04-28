import { Entity, PrimaryColumn, Column, BeforeInsert } from 'typeorm';

@Entity('MEMB_INFO')
export class MEMB_INFO {
    @Column({ type: 'int', generated: 'increment' })
    memb_guid: number

    @PrimaryColumn({ type: 'nvarchar', length: 10 })
    memb___id: string;

    @Column({ type: 'nvarchar', length: 10, select: false })
    memb__pwd: string;

    @Column({ type: 'nvarchar', length: 50 })
    mail_addr: string;

    @Column({ type: 'nvarchar', length: 10 })
    memb_name: string;

    @Column({ type: 'nvarchar', length: 13 })
    sno__numb: string;

    @Column({ type: 'nvarchar', length: 1 })
    bloc_code: string;

    @Column({ type: 'nvarchar', length: 1 })
    ctl1_code: string;

    @BeforeInsert()
    beforeInsertActions() {
        const defaults = {
            sno__numb: '1111111111111',
            bloc_code: '0',
            ctl1_code: '1',
            IsVip: 0,
            VipExpirationTime: 0
        };

        Object.keys(defaults).forEach(column => {
            this[column] = this[column] || defaults[column];
        });

        this.memb_name = this.memb___id;
    }
}
