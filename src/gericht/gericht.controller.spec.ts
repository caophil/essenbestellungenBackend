import { Test, TestingModule } from '@nestjs/testing';
import { GerichtController } from './gericht.controller';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import {AdminGuard} from '../auth/admin.guard';
import { GerichtService } from './gericht.service';
import { getModelToken } from '@nestjs/mongoose';
import { Gericht } from './gericht';

describe('GerichtController', () => {
  let controller: GerichtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerichtController],
      providers: [AuthenticatedGuard,AdminGuard, GerichtService, {provide: getModelToken(Gericht.name),useValue: jest.fn()}]
    }).compile();

    controller = module.get<GerichtController>(GerichtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
