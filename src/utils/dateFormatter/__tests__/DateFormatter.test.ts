import { DateFormatter } from '../DateFormatter';

describe('Class: DateFormatter util', () => {
  it('should return date formatted to brazilian pattern', () => {
    expect(DateFormatter.formatStringToBrPattern('2011-01-25T18:44:36Z')).toBe(
      '25/1/2011'
    );
  });

  it('should throw an error', () => {
    expect(() => DateFormatter.formatStringToBrPattern('invalid')).toThrow();
  });
});
