import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [LocalAuthGuard, AuthenticatedGuard, UsersService, {provide: getModelToken('user'),useValue: jest.fn()}]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
