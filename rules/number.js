const pattern = /^\d+$/;

export default message => ({
  validate: value => !value || pattern.test(value),
  hint: () => message || 'Not a valid number'
});
