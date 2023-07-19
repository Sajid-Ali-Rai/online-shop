import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  description: string;

  @Field()
  name: string;
}
