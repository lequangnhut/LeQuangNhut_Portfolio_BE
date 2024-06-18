import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { ProductsEntity } from 'src/entity/products.entity';
import { Product } from 'src/models/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>,
  ) {}

  private products: Product[] = [
    { id: 1, categoryId: 2, productName: 'Keyboard', price: 500000 },
    { id: 2, categoryId: 3, productName: 'Mouse', price: 150000 },
  ];

  async getAllProducts(): Promise<ProductsEntity[]> {
    console.log('Fetching all products...');
    const products = await this.productRepository.find();
    console.log('Products fetched:', products);
    return products;
  }

  getDetailtProducts(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }

  createProducts(productDto: ProductDto): Product {
    const product: Product = {
      id: Math.random(),
      ...productDto,
    };
    this.products.push(product);
    return product;
  }

  updateProducts(productDto: ProductDto, id: number): Product {
    const index = this.products.findIndex((item) => item.id === Number(id));
    this.products[index].categoryId = productDto.categoryId;
    this.products[index].price = productDto.price;
    this.products[index].productName = productDto.productName;
    return productDto;
  }

  deleteProducts(id: number): string {
    const index = this.products.findIndex((item) => item.id === Number(id));
    if (index != -1) {
      this.products.splice(index, 1);
      return 'Delete product success ' + id;
    }
    return 'Delete product error ' + id;
  }
}
