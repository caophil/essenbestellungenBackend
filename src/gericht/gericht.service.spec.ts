import { Test, TestingModule } from '@nestjs/testing';
import { GerichtService } from './gericht.service';
import { Gericht } from './gericht';
import { getModelToken } from '@nestjs/mongoose';

describe('GerichtService', () => {
  let service: GerichtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerichtService, {provide: getModelToken(Gericht.name),useValue: jest.fn()}],
    }).compile();

    service = module.get<GerichtService>(GerichtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
