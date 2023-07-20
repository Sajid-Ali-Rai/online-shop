import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Length, max, min } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
