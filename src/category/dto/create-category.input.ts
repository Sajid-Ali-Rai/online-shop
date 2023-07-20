import { InputType, Int, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @Field()
  // @Length(5, 1000)
  description: string;

  @Field()
  // @Length(5, 100)
  name: string;
}
