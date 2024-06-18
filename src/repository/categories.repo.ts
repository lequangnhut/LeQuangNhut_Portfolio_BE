import { CategoriesEntity } from 'src/entity/categories.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(CategoriesEntity)
export class CategoryRepository extends Repository<CategoriesEntity> {}
