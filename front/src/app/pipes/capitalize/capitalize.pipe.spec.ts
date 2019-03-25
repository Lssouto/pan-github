import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should capitalize value', () => {
    const pipe = new CapitalizePipe();
    const capitalized = pipe.transform('capitalizeTest');
    expect(capitalized).toBe('CapitalizeTest');
  });

  it('should capitalize value', () => {
    const pipe = new CapitalizePipe();
    const capitalized = pipe.transform('');
    expect(capitalized).toBe('');
  });
});
