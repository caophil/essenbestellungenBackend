import { Test, TestingModule } from '@nestjs/testing';
import { DayService } from './day.service';
import {Gericht} from '../gericht/gericht';
import { getModelToken } from '@nestjs/mongoose';
import { Day } from './day';

describe('DayService', () => {
  let service: DayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayService, {provide: getModelToken(Day.name),useValue: jest.fn()} , Gericht],
    }).compile();

    service = module.get<DayService>(DayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
});
