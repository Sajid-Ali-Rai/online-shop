import { IsInt, IsNumber, Length } from 'class-validator';
import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  @Length(2, 100)
  name: string;

  @Field()
  @Length(2, 1000)
  description: string;

  @Field()
  @Length(2, 1000)
  imageUrl: string;

  @Field(() => Float)
  @IsNumber()
  price: number;

  @Field(() => Float)
  @IsNumber()
  weight: number;

  @Field(() => Int)
  @IsInt()
  categoryId: number;
}
