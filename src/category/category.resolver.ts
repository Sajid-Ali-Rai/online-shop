import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { ProductService } from 'src/product/product.service';
import { Product } from 'src/product/entities/product.entity';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category])
  findAllCategories() {
    return this.categoryService.findAllProducts();
  }

  @ResolveField('products', (returns) => [Product])
  async posts(@Parent() author: Category) {
    const { id } = author;
    return this.productService.findAllByCategoryId({ categoryId: id });
  }

  @Query(() => Category)
  findCategoryById(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.findProductByID(id);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.remove(id);
  }
}
