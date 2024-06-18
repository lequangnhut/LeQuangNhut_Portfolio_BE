import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serviceName: string;

  @Column()
  descriptions: string;

  @Column()
  price: string;

  @Column()
  icon: string;

  @Column()
  isShow: boolean;
}
