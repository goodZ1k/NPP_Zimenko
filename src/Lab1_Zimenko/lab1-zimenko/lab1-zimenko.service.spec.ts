import { Test, TestingModule } from '@nestjs/testing';
import { Lab1ZimenkoService } from './lab1-zimenko.service';

describe('Lab1ZimenkoService', () => {
  let service: Lab1ZimenkoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lab1ZimenkoService],
    }).compile();

    service = module.get<Lab1ZimenkoService>(Lab1ZimenkoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
