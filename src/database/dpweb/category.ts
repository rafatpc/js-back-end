import { Column, Entity, PrimaryColumn, JoinColumn, OneToMany, } from 'typeorm';
import { Items } from './items';

@Entity('DPWebShop_Category')
export class Category {
    @PrimaryColumn({ type: 'int' })
    Id: number;

    @Column({ type: 'nvarchar', length: 50 })
    Name: string;

    @Column({ type: 'int' })
    Hidden: number;

    @OneToMany(() => Items, item => item.WS_Category)
    @JoinColumn({ name: 'WS_Category' })
    Items: Items[]
}
