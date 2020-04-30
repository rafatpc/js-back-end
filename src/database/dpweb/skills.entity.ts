import { Entity, PrimaryColumn, Column } from "typeorm";
import { Expose } from "class-transformer";

@Entity('DPWebShop_Skills')
export class Skills {
    @PrimaryColumn({ type: 'int' })
    Id: number;

    @Column({ type: 'nvarchar', length: 50 })
    Name: string;
}
