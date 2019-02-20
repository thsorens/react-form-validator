import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
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
    { components = {}, invalid = {}, values = {} },
    dispatch
  ] = useReducer(reducer, { components: [], values: props.initialState || {} });

  const validate = () => {
    const foundBroken = {};
    let firstError;

    components.forEach((comp) => {
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
    values
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
