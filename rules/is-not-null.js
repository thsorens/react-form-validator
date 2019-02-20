export default message => ({
  validate: value => value !== null,
  hint: () => message || 'This field is mandatory'
});
