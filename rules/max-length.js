export default (length = Number.MAX_SAFE_INTEGER, message) => ({
  validate: value => !value || value.length <= length,
  hint: () => message || (`Max length ${length}`)
});
