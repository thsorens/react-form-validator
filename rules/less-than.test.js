import assert from 'assert';
import lessThan from '.';

describe('Less than validator', () => {
  const { validate } = lessThan(91);

  it('Should fail for numbers over limit', () => {
    assert(!validate(91));
  });

  it('Shouldpass for lower numbers', () => {
    assert(validate(30));
  });

  it('should fail if not a number', () => {
    assert(!validate('test'));
  });

  it('should pass if empty', () => {
    assert(validate());
  });
});
