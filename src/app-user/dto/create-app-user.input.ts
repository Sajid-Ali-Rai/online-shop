import { InputType, Int, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreateAppUserInput {
  @Field()
  @Length(4, 100)
  name: string;

  @Field()
  @Length(4, 100)
  password: string;
}
