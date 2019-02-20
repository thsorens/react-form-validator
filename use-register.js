import { useEffect, useContext } from 'react';
import context from './context';

export default (props) => {
  const {
    register,
    unregister,
    updateValue,
    invalid,
    values
  } = useContext(context);

  useEffect(() => {
    register(props.name, props.rules || []);

    return function cleanup() {
      unregister(props.name);
    };
  }, []);

  return {
    update: (val, id = props.name) => updateValue(id, val),
    invalid: invalid[props.name],
    value: values[props.name]
  };
};