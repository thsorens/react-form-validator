export default message => ({
  handlesNull: true,
  validate: (value) => {
    if (value === 0) {
      return true;
    }
    let val = value;
    const validate = !!val && (val += '').trim();
    return validate;
  },
  hint: () => message || 'This field is mandatory'
});
