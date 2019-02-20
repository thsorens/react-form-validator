import number from './number';

export default message => ({
  validate: value => (!value || value.length === 0)
        || (number().validate(value) && value.length === 4),
  hint: () => message || 'Invalid zip-format'
});
