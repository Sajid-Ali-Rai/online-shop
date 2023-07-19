import { Module, forwardRef } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category]),
    forwardRef(() => CategoryModule),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
