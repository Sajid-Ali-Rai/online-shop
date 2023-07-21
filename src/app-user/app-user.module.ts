import { Module } from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { AppUserResolver } from './app-user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from './entities/app-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppUser])],
  providers: [AppUserResolver, AppUserService],
  exports: [AppUserService],
})
export class AppUserModule {}
