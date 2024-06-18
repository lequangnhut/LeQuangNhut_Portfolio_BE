import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoriesEntity } from './categories.entity';

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @ManyToOne(() => CategoriesEntity, (category) => category.product)
  category: CategoriesEntity;
}
