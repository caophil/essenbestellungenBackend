import { Test, TestingModule } from '@nestjs/testing';
import { BestellungService } from './bestellung.service';

describe('BestellungService', () => {
  let service: BestellungService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BestellungService],
    }).compile();

    service = module.get<BestellungService>(BestellungService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
