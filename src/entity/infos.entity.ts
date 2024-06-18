import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('infos')
export class Infos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  birth: Date;

  @Column()
  fbLink: string;

  @Column()
  zaloLink: string;

  @Column()
  cvLink: string;

  @Column()
  slogan: string;

  @Column()
  target: string;

  @Column()
  address: string;

  @Column()
  gmail: string;

  @Column()
  phone: string;

  @Column()
  avatar: string;

  @Column()
  isShow: boolean;
}
