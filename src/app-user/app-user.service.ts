import { Injectable } from '@nestjs/common';
import { CreateAppUserInput } from './dto/create-app-user.input';
import { UpdateAppUserInput } from './dto/update-app-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { AppUser } from './entities/app-user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppUserService {
  constructor(
    @InjectRepository(AppUser) private appUserRepository: Repository<AppUser>,
  ) {}

  async create(createAppUserInput: CreateAppUserInput): Promise<AppUser> {
    let user: AppUser = new AppUser();
    user.name = createAppUserInput.name;

    user.role = 'NORMAL_USER';

    //encript the password
    let encriptePassword = await this.encriptThePassowrd(
      createAppUserInput.password,
    );
    user.password = encriptePassword;

    return await this.appUserRepository.save(user);
  }

  private async encriptThePassowrd(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async findAllUsers(): Promise<AppUser[]> {
    return await this.appUserRepository.find();
  }

  async findUserById(id: number): Promise<AppUser> {
    return this.appUserRepository.findOne({ where: { id: id } });
  }

  async findUserByUserName(name: string): Promise<AppUser> {
    return this.appUserRepository.findOne({ where: { name } });
  }

  async updateUser(
    id: number,
    updateAppUserInput: UpdateAppUserInput,
  ): Promise<AppUser> {
    let existingUser = await this.findUserById(id);

    existingUser.name = updateAppUserInput.name;
    existingUser.password = await this.encriptThePassowrd(
      updateAppUserInput.password,
    );
    existingUser.role = updateAppUserInput.role;
    return this.appUserRepository.save(existingUser);
  }

  async removeAppUser(id: number): Promise<AppUser> {
    let existingUser: AppUser = await this.findUserById(id);
    this.appUserRepository.remove(existingUser);
    return existingUser;
  }
}
