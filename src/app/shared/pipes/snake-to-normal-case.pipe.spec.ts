import { SnakeToNormalCasePipe } from './snake-to-normal-case.pipe';

describe('SnakeToNormalCasePipe', () => {
  it('create an instance', () => {
    const pipe = new SnakeToNormalCasePipe();
    expect(pipe).toBeTruthy();
  });
});
