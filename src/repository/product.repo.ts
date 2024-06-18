import { ProductsEntity } from 'src/entity/products.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ProductsEntity)
export class ProductsRepository extends Repository<ProductsEntity> {}
