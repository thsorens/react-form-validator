export const REGISTERED_FORM_ELEMENT = 'REGISTERED_FORM_ELEMENT';
export const UNREGISTERED_FORM_ELEMENT = 'UNREGISTERED_FORM_ELEMENT';
export const FORM_ELEMENT_UPDATED = 'FORM_ELEMENT_UPDATED';
export const FORM_VALIDATION_RESULT = 'FORM_VALIDATION_RESULT';

export const register = (id, rules) => ({
  type: REGISTERED_FORM_ELEMENT, id, rules
});

export const unregister = id => ({
  type: UNREGISTERED_FORM_ELEMENT, id
});

export const updateValue = (id, value) => ({
  type: FORM_ELEMENT_UPDATED, id, value
});

export const setInvalid = invalid => ({
  type: FORM_VALIDATION_RESULT, invalid
});

export const isFunction = x => typeof x === 'function';

export const validateComponent = (comp, value) => {
  let valid = true;
  let rule = null;
  let actualRule = null;

  const { rules } = comp;

  if (!rules || rules.length === 0) return { valid };

  if (rules) {
    for (let i = 0; i < rules.length; i += 1) {
      rule = rules[i];

      if (isFunction(rule)) {
        actualRule = rule();
      } else {
        actualRule = rule;
      }

      if (
        (value === undefined || value === null)
        && !actualRule.handlesNull
      ) {
        break;
      }

      const result = !!actualRule.validate(value);
      valid = !!result;

      if (!valid) {
        break;
      }
    }
  }

  const hint = !valid ? actualRule.hint : null;
  let errorMessage = null;
  if (hint) {
    if (isFunction(hint)) {
      errorMessage = hint(value);
    } else {
      errorMessage = hint;
    }
  }

  return { valid, errorMessage };
};
