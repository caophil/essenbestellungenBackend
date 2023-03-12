import { Test, TestingModule } from '@nestjs/testing';
import { GerichtService } from './gericht.service';

describe('GerichtService', () => {
  let service: GerichtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerichtService],
    }).compile();

    service = module.get<GerichtService>(GerichtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
