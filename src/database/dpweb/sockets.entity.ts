import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('DPWebShop_Socket')
export class Sockets {
    @PrimaryColumn({ type: 'int' })
    @Exclude()
    Number: number;

    @Column({ type: 'int', })
    Type: number;

    @Column({ type: 'int' })
    Id: number;

    @Column({ type: 'nvarchar' })
    Name: string;

    @Column({ type: 'int' })
    Level1: number;

    @Column({ type: 'int' })
    Level2: number;

    @Column({ type: 'int' })
    Level3: number;

    @Column({ type: 'int' })
    Level4: number;

    @Column({ type: 'int' })
    Level5: number;
}
