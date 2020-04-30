import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Sets } from './sets.entity'
import { Transform, TransformClassToPlain, Exclude } from 'class-transformer';

@Entity('DPWebShop_Set_Items')
export class SetItems {
    @Exclude()
    @PrimaryColumn({ type: 'int' })
    Number: number;

    @Exclude()
    @Column({ type: 'int', })
    Type: number;

    @Exclude()
    @Column({ type: 'int' })
    Id: number;

    @OneToOne(() => Sets, { eager: true })
    @JoinColumn({ name: 'Set1' })
    @Transform(Set => Set?.Name)
    Set1: Sets;

    @OneToOne(() => Sets, { eager: true })
    @JoinColumn({ name: 'Set2' })
    @Transform(Set => Set?.Name)
    Set2: Sets;
}
