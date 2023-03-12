import { Test, TestingModule } from '@nestjs/testing';
import { GerichtController } from './gericht.controller';

describe('GerichtController', () => {
  let controller: GerichtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerichtController],
    }).compile();

    controller = module.get<GerichtController>(GerichtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
