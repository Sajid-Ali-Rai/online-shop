import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AppUserModule } from 'src/app-user/app-user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'hard!to-guess_secret',
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
    AppUserModule,
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
