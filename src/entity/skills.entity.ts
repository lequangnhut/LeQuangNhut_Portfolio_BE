import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skills')
export class Skills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skillName: string;

  @Column()
  skillType: string;

  @Column()
  rate: string;

  @Column()
  icon: string;

  @Column()
  isShow: boolean;
}
