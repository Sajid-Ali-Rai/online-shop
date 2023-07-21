import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppUserService } from 'src/app-user/app-user.service';
import { AppUser } from 'src/app-user/entities/app-user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly appUserService: AppUserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<string> {
    const user: AppUser = await this.appUserService.findUserByUserName(
      username,
    );

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.name, role: user.role };

    let accessToken: string = this.jwtService.sign(payload);

    return accessToken;
  }
}
