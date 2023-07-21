import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AppUserService } from './app-user.service';
import { AppUser } from './entities/app-user.entity';
import { CreateAppUserInput } from './dto/create-app-user.input';
import { UpdateAppUserInput } from './dto/update-app-user.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/role.enum';

@Resolver(() => AppUser)
export class AppUserResolver {
  constructor(private readonly appUserService: AppUserService) {}

  @Mutation(() => AppUser)
  createAppUser(
    @Args('createAppUserInput') createAppUserInput: CreateAppUserInput,
  ) {
    return this.appUserService.create(createAppUserInput);
  }

  @Query(() => [AppUser], { name: 'findAllUsers' })
  @UseGuards(AuthGuard, new RolesGuard(Role.Admin))
  findAllUsers() {
    return this.appUserService.findAllUsers();
  }

  @Query(() => AppUser, { name: 'findUserById' })
  @UseGuards(AuthGuard, new RolesGuard(Role.User))
  findUserById(@Args('id', { type: () => Int }) id: number) {
    return this.appUserService.findUserById(id);
  }

  @Mutation(() => AppUser)
  updateAppUser(
    @Args('updateAppUserInput') updateAppUserInput: UpdateAppUserInput,
  ) {
    return this.appUserService.updateUser(
      updateAppUserInput.id,
      updateAppUserInput,
    );
  }

  @Mutation(() => AppUser)
  @UseGuards(AuthGuard, new RolesGuard(Role.Admin))
  removeAppUser(@Args('id', { type: () => Int }) id: number) {
    return this.appUserService.removeAppUser(id);
  }
}
