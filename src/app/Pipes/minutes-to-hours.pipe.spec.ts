import { MinutesToHoursPipe } from './minutes-to-hours.pipe';

describe('MinutesToHoursPipe', () => {
  let pipe: MinutesToHoursPipe;

  beforeEach(() => {
    pipe = new MinutesToHoursPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transforms "90" to "1h 30min"', () => {
    expect(pipe.transform('90')).toBe('1h 30min');
  });

  it('should transforms 90 to "1h 30min"', () => {
    expect(pipe.transform(90)).toBe('1h 30min');
  });

  it('should transforms "not a number" to "INVALID MINUTES PROVIDED"', () => {
    expect(pipe.transform('not a number')).toBe('INVALID MINUTES PROVIDED');
  });

  it('should transforms null to "INVALID MINUTES PROVIDED"', () => {
    expect(pipe.transform('INVALID MINUTES PROVIDED')).toBe('INVALID MINUTES PROVIDED');
  });
});
