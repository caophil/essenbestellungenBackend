import { Test, TestingModule } from '@nestjs/testing';
import { BestellungController } from './bestellung.controller';
import {AdminGuard} from '../auth/admin.guard';
import {AuthenticatedGuard} from "../auth/authenticated.guard";
import {MyGuard} from '../auth/my.guard';

describe('BestellungController', () => {
  let controller: BestellungController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BestellungController],
      providers: [AdminGuard, AuthenticatedGuard, MyGuard]
    }).compile();

    controller = module.get<BestellungController>(BestellungController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
