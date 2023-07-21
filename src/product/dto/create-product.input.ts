import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsInt, IsNumber, Length } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @Length(5, 100)
  name: string;

  @Field()
  @Length(5, 1000)
  description: string;

  @Field()
  @Length(5, 1000)
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
