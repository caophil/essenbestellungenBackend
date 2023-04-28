import { Test, TestingModule } from '@nestjs/testing';
import { BestellungController } from './bestellung.controller';
import {AdminGuard} from '../auth/admin.guard';
import {AuthenticatedGuard} from "../auth/authenticated.guard";
import {MyGuard} from '../auth/my.guard';
import { BestellungService } from './bestellung.service';
import { getModelToken } from '@nestjs/mongoose';
import { Bestellung } from './bestellung.model';

describe('BestellungController', () => {
  let controller: BestellungController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BestellungController],
      providers: [AdminGuard, AuthenticatedGuard, MyGuard, BestellungService, {provide: getModelToken(Bestellung.name),useValue: jest.fn()}]
    }).compile();

    controller = module.get<BestellungController>(BestellungController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
