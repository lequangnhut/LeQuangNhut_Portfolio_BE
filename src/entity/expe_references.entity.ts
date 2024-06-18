import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('expe_references')
export class Expe_references {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expeId: number;

  @Column()
  fullName: string;

  @Column()
  company: string;

  @Column()
  levels: string;

  @Column()
  gmail: string;

  @Column()
  phone: string;

  @Column()
  isShow: boolean;
}
