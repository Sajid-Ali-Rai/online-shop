import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createProductInput: CreateProductInput): Promise<Product> {
    //find existing category by its ID
    const categoryId = createProductInput.categoryId;
    const category = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });

    const newProduct = await this.productRepository.create(createProductInput);

    //asssign existing category entity to product entity
    newProduct.category = category;

    return this.productRepository.save(newProduct);
  }

  async findAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findAllByCategoryId(obj: { categoryId: number }): Promise<Product[]> {
    return await this.productRepository.find({
      where: { categoryId: obj.categoryId },
    });
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    const existingProduct = await this.findOne(id);
    existingProduct.description = updateProductInput.description;
    existingProduct.imageUrl = updateProductInput.imageUrl;
    existingProduct.name = updateProductInput.name;
    existingProduct.price = updateProductInput.price;
    existingProduct.weight = updateProductInput.weight;
    return this.productRepository.save(existingProduct);
  }

  async remove(id: number): Promise<Product> {
    const product = await this.findOne(id);
    this.productRepository.remove(product);
    return product;
  }
}
