import { MultiplyMiddleware } from './multiply.middleware';

describe('MultiplyMiddleware', () => {
  it('should be defined', () => {
    expect(new MultiplyMiddleware()).toBeDefined();
  });
});
