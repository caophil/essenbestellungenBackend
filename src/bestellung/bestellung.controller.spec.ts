import { Test, TestingModule } from '@nestjs/testing';
import { BestellungController } from './bestellung.controller';

describe('BestellungController', () => {
  let controller: BestellungController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BestellungController],
    }).compile();

    controller = module.get<BestellungController>(BestellungController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
