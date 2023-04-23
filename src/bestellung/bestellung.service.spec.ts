import { Test, TestingModule } from '@nestjs/testing';
import { BestellungService } from './bestellung.service';
import { Gericht } from '../gericht/gericht';

describe('BestellungService', () => {
  let service: BestellungService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BestellungService, Gericht],
    }).compile();

    service = module.get<BestellungService>(BestellungService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
