import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from 'reactstrap';

import PropTypes from 'prop-types';
import useRegisterComponent from '../use-register';

const TextInput = (props) => {
  const { value, invalid, update } = useRegisterComponent(props);

  return (
    <FormGroup className="row">
      <Label lg={3}>
        {props.label}
      </Label>
      <Col lg={9}>
        <Input id={props.name} invalid={!!invalid} type={props.type} value={value || ''} onChange={ev => update(ev.target.value)} />
        <FormFeedback>
          {invalid ? invalid.errorMessage : null}
        </FormFeedback>
      </Col>
    </FormGroup>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  rules: PropTypes.array
};

TextInput.defaultProps = {
  type: 'text',
  rules: []
};

export default TextInput;