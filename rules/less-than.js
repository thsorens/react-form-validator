export default (length = Number.MAX_SAFE_INTEGER, message) => ({
  validate: (value) => {
    if (!value) {
      return true;
    }
    if (Number.isNaN(value)) {
      return false;
    }

    return value < length;
  },
  hint: () => message || `Must be less than ${length}`
});
