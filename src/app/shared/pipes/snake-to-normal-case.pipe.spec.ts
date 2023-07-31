import { SnakeToNormalCasePipe } from './snake-to-normal-case.pipe';

describe('SnakeToNormalCasePipe', () => {
  it('Should switch the "-" to spaces from the informed string', () => {
    const pipe = new SnakeToNormalCasePipe();
    expect(pipe.transform('hello-world')).toBe('hello world');
  });
  it('Should return an empty string if no string is informed', () => {
    const pipe = new SnakeToNormalCasePipe();
    expect(pipe.transform('')).toBe('');
  });
});
