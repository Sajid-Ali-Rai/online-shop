import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthPayload {
  accessToken: string;
}
