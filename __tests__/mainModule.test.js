import { add } from '../src/mainModule'

describe('add', () => {
  it('returns sum of two numbers', () => {
    expect(add(2, 3)).toBe(5)
  });
});

