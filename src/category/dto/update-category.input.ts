import { IsInt, Length, Max, Min } from 'class-validator';
import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100000)
  id: number;

  @Field()
  @Length(5, 1000)
  description: string;

  @Field()
  @Length(5, 100)
  name: string;
}
