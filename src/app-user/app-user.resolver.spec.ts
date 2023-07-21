import { Test, TestingModule } from '@nestjs/testing';
import { AppUserResolver } from './app-user.resolver';
import { AppUserService } from './app-user.service';

describe('AppUserResolver', () => {
  let resolver: AppUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppUserResolver, AppUserService],
    }).compile();

    resolver = module.get<AppUserResolver>(AppUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
