const pattern = /((([0][1-9]|[12][\d])|[3][01])[.]([0][13578]|[1][02])[.][1-9]\d\d\d)|((([0][1-9]|[12][\d])|[3][0])[.]([0][13456789]|[1][012])[.][1-9]\d\d\d)|(([0][1-9]|[12][\d])[.][0][2][.][1-9]\d([02468][048]|[13579][26]))|(([0][1-9]|[12][0-8])[.][0][2][.][1-9]\d\d\d)/;

export default message => ({
  validate: value => !value || pattern.test(value),
  hint: () => message || 'date should be in format dd.mm.yyyy'
});
