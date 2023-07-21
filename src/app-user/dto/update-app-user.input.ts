import { IsIn, IsInt, Length } from 'class-validator';
import { CreateAppUserInput } from './create-app-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAppUserInput extends PartialType(CreateAppUserInput) {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  @Length(4, 100)
  name: string;

  @Field()
  @Length(4, 100)
  password: string;

  @Field()
  @IsIn(['ADMIN', 'NORMAL_USER'])
  role: string;
}
