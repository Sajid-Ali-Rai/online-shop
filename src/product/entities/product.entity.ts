import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  imageUrl: string;

  @Field(() => Float)
  @Column({ nullable: true, type: 'float8' })
  price: number;

  @Field(() => Float)
  @Column({ nullable: true, type: 'float8' })
  weight: number;

  @Field(() => Int)
  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @Field(() => Category)
  category: Category;
}
