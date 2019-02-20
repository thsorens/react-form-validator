export default message => ({
  handlesNull: true,
  validate: (value) => {
    if (value === 0) {
      return true;
    }
    if (value === -1 || value === '-1') {
      return false;
    }
    let val = value;
    const validate = !!val && (val += '').trim();
    return validate;
  },
  hint: () => message || 'This field is mandatory'
});
