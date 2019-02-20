import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import reducer from './reducer';
import ValidatorContext from './context';
import {
  register,
  unregister,
  updateValue,
  validateComponent,
  setInvalid
} from './actions';

const ValidatorProvider = (props) => {
  const [
    { components = [], invalid = {}, values = {} },
    dispatch
  ] = useReducer(reducer, { components: [], values: props.initialState || {} });

  const ids = components.map(c => c.id);
  const test = _filter(ids, (value, index, iteratee) => _includes(iteratee, value, index + 1));
  const { length } = test;

  useEffect(() => {
    if (test.length > 0) {
      test.forEach((fail) => {
        // eslint-disable-next-line no-console
        console.warn(`You have registered two instances with the same name (${fail})`);
        // eslint-disable-next-line no-console
        console.warn('Please correct to avoid two fields being mapped to the same property');
      });
    }
  }, [length]);

  const validate = () => {
    const foundBroken = {};
    let firstError;
    components.filter(c => c.rules && c.rules.length > 0).forEach((comp) => {
      const result = validateComponent(comp, values[comp.id]);
      if (!result.valid) {
        foundBroken[comp.id] = result;
        if (!firstError) {
          firstError = { ...result, id: comp.id };
        }
      }
    });
    dispatch(setInvalid(foundBroken));

    return { valid: Object.keys(foundBroken).length === 0, firstError };
  };

  const contextValues = {
    register: (id, rules) => dispatch(register(id, rules)),
    unregister: id => dispatch(unregister(id)),
    updateValue: (id, value) => dispatch(updateValue(id, value)),
    validate,
    invalid,
    values,
    components
  };

  return (
    <ValidatorContext.Provider value={contextValues}>
      {props.children}
    </ValidatorContext.Provider>
  );
};

ValidatorProvider.propTypes = {
  children: PropTypes.any,
  initialState: PropTypes.object
};

export default ValidatorProvider;
