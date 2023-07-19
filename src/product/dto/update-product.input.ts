import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  imageUrl: string;

  @Field(() => Float)
  price: number;

  @Field(() => Float)
  weight: number;

  @Field(() => Int)
  categoryId: number;
}
