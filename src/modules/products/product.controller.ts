import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';
import { ProductsEntity } from 'src/entity/products.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * Get tất cả dữ liệu trong đối tượng Product
   * @returns Đối tượng Product
   */
  @Get()
  async getProducts(): Promise<ResponseData<ProductsEntity>> {
    try {
      const products = await this.productService.getAllProducts();
      return new ResponseData<ProductsEntity>(
        products,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      console.error(error); // Log lỗi để debug
      return new ResponseData<ProductsEntity>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  /**
   * Get dữ liệu cụ thể qua Id trong đối tượng Product
   * @returns Đối tượng Product
   */
  @Get('/:id')
  getDetailtProducts(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.getDetailtProducts(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  createProducts(
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.createProducts(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductDto>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put('/:id')
  updateProducts(
    @Param('id') id: number,
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.updateProducts(productDto, id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete('/:id')
  deleteProducts(@Param('id') id: number): ResponseData<String> {
    try {
      return new ResponseData<String>(
        this.productService.deleteProducts(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<String>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
