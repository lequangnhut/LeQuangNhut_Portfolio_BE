import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('diplomas')
export class Diplomas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diplomaName: string;

  @Column()
  graduateYear: number;

  @Column()
  froms: string;

  @Column()
  score: number;

  @Column()
  icon: string;

  @Column()
  isShow: boolean;
}
