import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('studies')
export class Studies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  schoolName: string;

  @Column()
  startDay: Date;

  @Column()
  endDay: Date;

  @Column()
  rateType: string;

  @Column()
  icon: string;

  @Column()
  isShow: boolean;
}
