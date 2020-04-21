import { Entity, PrimaryColumn, Column, BeforeInsert } from "typeorm";
import { identity } from "rxjs";

@Entity()
export class MEMB_INFO {
    @Column({ type: 'int', generated: 'increment' })
    memb_guid: number

    @PrimaryColumn({ type: 'nvarchar' })
    memb___id: string;

    @Column({ type: 'nvarchar' })
    memb__pwd: string;

    @Column({ type: 'nvarchar', nullable: true })
    mail_addr: string;

    @Column({ type: 'nvarchar' })
    memb_name: string;

    @Column({ type: 'nvarchar' })
    sno__numb: string;

    @Column({ type: 'nvarchar', length: 1 })
    bloc_code: string

    @Column({ type: 'nvarchar', length: 1 })
    ctl1_code: string

    @Column({ type: 'int' })
    IsVip: number

    @Column({ type: 'int' })
    VipExpirationTime: number

    private readonly defaults = {
        sno__numb: '11111111111',
        bloc_code: '0',
        ctl1_code: '1',
        IsVip: 0,
        VipExpirationTime: 0
    };

    @BeforeInsert()
    beforeInsertActions() {
        Object.keys(this.defaults).forEach(column => {
            this[column] = this[column] || this.defaults[column];
        });

        this.memb_name = this.memb___id;
    }
}
