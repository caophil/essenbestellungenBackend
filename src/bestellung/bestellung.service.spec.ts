import { Test, TestingModule } from '@nestjs/testing';
import { BestellungService } from './bestellung.service';
import { Gericht } from '../gericht/gericht';
import { getModelToken } from '@nestjs/mongoose';
import { Bestellung } from './bestellung.model';

describe('BestellungService', () => {
  let service: BestellungService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BestellungService, {provide: getModelToken(Bestellung.name),useValue: jest.fn()} ,Gericht],
    }).compile();

    service = module.get<BestellungService>(BestellungService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
