import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('MasterSkillTree')
export class MasterSkillTree {
    @PrimaryColumn({ type: 'nvarchar', length: 50 })
    Name: string;

    @Column({ type: 'int' })
    MasterLevel: number;

    @Column({ type: 'int' })
    MasterPoint: number;
}
