import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,

    private productService: ProductService,
  ) {}
  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const newCategory = await this.categoryRepository.create(
      createCategoryInput,
    );

    return this.categoryRepository.save(newCategory);
  }

  async findAllCategories(): Promise<Category[]> {
    return this.categoryRepository.find({});
  }

  async findProductsByCategoryId(categoryId: number): Promise<Product[]> {
    return await this.productService.findAllByCategoryId({ categoryId });
  }

  findCategoryById(id: number) {
    return this.categoryRepository.findOne({
      where: { id },
      relations: {
        // categories: true,
      },
    });
  }
}
