import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('DPWebShop_Sets')
export class Sets {
    @PrimaryColumn({ type: 'int' })
    Number: number;

    @Column({ type: 'int' })
    Id: number;

    @Column({ type: 'nvarchar', length: 50 })
    Name: string;
}
