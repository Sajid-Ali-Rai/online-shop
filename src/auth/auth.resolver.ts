import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload } from './dto/auth-payload.input';

@Resolver(() => String)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query((returns) => String)
  async singIn(
    @Args('name') name: string,
    @Args('password') password: string,
  ): Promise<string> {
    return await this.authService.signIn(name, password);
  }
}
