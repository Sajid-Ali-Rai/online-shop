import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
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
