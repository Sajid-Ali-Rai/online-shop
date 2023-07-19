import { Module, forwardRef } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Product]),
    forwardRef(() => ProductModule),
  ],
  providers: [CategoryResolver, CategoryService, ProductService],
})
export class CategoryModule {}
