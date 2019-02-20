export default message => ({
  validate: value => !!value,
  hint: () => message || 'This field is mandatory'
});
