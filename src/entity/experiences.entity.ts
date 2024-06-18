import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('experiences')
export class Experiences {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desriptions: string;

  @Column()
  times: Date;

  @Column()
  roles: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  icon: string;

  @Column()
  isShow: boolean;
}
