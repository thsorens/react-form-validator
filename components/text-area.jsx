import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  FormFeedback
} from 'reactstrap';

import PropTypes from 'prop-types';
import useRegisterComponent from '../use-register';

const Select = (props) => {
  const { value, invalid, update } = useRegisterComponent(props);

  return (
    <FormGroup>
      <Label>
        {props.label}
      </Label>
      <Input invalid={!!invalid} id={props.name} type="textarea" value={value || ''} onChange={ev => update(ev.target.value)} />
      <FormFeedback>
        {invalid ? invalid.errorMessage : null}
      </FormFeedback>
    </FormGroup>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
};

export default Select;