export default message => ({
  validate: () => false,
  hint: () => message || 'This field is mandatory'
});
