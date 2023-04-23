import { Test, TestingModule } from '@nestjs/testing';
import { DayController } from './day.controller';
import { DayService } from './day.service';
import { AdminGuard } from '../auth/admin.guard';
import {AuthenticatedGuard} from "../auth/authenticated.guard";

describe('DayController', () => {
  let controller: DayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayController],
      providers: [DayService, AdminGuard, AuthenticatedGuard],
    }).compile();

    controller = module.get<DayController>(DayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
