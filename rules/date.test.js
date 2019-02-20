import assert from 'assert';
import { date } from '.';

describe('Date validator', () => {
  const { validate } = date();

  it('dates with format dd.mm.yyyy and containing exactly 10 characters should be valid', () => {
    assert(validate('31.05.2012'));
  });

  it('dates with month out of bounds should not be allowed', () => {
    assert(!validate('20.20.2019'));
  });

  it('should reject inputs less or greater than 10 characters or not matching dd.mm.yyyy format', () => {
    assert(!validate('05.31.2012'));
    assert(!validate('2012.05.31'));
    assert(!validate('105.31.2012'));
    assert(!validate('11.11.111'));
  });

  it('should pass if given an empty string', () => {
    assert(validate(''));
  });
});
