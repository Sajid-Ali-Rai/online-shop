import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const newCategory = await this.categoryRepository.create(
      createCategoryInput,
    );

    return this.categoryRepository.save(newCategory);
  }

  async findAllProducts(): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: ['products'],
    });
  }

  findProductByID(id: number) {
    return this.categoryRepository.findOne({
      where: { id },
      relations: {
        // categories: true,
      },
    });
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
