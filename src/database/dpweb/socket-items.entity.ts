import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('DPWebShop_Socket_Items')
@Exclude()
export class SocketItems {
    @PrimaryColumn({ type: 'int' })
    Number: number;

    @Column({ type: 'int', })
    Type: number;

    @Column({ type: 'int' })
    Id: number;
}
