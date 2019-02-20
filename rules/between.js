export default (minLimit = 0, maxLimit = Number.MAX_SAFE_INTEGER - 1) => ({
  validate: value => !value || (value >= minLimit && value <= maxLimit),
  hint: (value) => {
    if (value < minLimit) {
      return `min limit ${minLimit}`;
    }
    return `max limit ${maxLimit}`;
  }
});
