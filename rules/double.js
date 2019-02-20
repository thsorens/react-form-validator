const pattern = /^-?\d+(\.\d*){0,1}$/;

export default message => ({
  validate: value => !value || pattern.test(value),
  hint: () => message || 'Not valid, enter a number, ex (2.1)'
});
