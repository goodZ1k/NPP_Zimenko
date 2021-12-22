import { Test, TestingModule } from '@nestjs/testing';
import { Lab1ZimenkoController } from './lab1-zimenko.controller';

describe('Lab1ZimenkoController', () => {
  let controller: Lab1ZimenkoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lab1ZimenkoController],
    }).compile();

    controller = module.get<Lab1ZimenkoController>(Lab1ZimenkoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
