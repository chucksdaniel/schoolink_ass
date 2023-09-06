import { Test, TestingModule } from '@nestjs/testing';
import { blogController } from './blog.controller';

describe('blogController', () => {
  let controller: blogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [blogController],
    }).compile();

    controller = module.get<blogController>(blogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
