import { Test, TestingModule } from '@nestjs/testing';
import { GerichtController } from './gericht.controller';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import {AdminGuard} from '../auth/admin.guard';

describe('GerichtController', () => {
  let controller: GerichtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerichtController],
      providers: [AuthenticatedGuard,AdminGuard]
    }).compile();

    controller = module.get<GerichtController>(GerichtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
