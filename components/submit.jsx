import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import validationContext from '../context';

const SubmitButton = (props) => {
  const { validate, values } = useContext(validationContext);

  const validateData = () => {
    const check = validate();
    if (check.valid) {
      props.onClick(values);
    } else if (check.firstError && check.firstError.id) {
      const elem = document.getElementById(check.firstError.id);
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      elem.focus();
    }
  };

  return (
    <Button color={props.color} onClick={() => validateData()}>{props.children}</Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default SubmitButton;