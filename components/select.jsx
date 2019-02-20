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

const Select = (props) => {
  let opts = props.options;

  const { value, invalid, update } = useRegisterComponent(props);

  const updateValue = (val) => {
    if (props.dependencies) {
      props.dependencies.forEach(d => update(d, 0));
    }
    update(val);
  };

  if (props.defaultText) {
    const defaultOption = (<option key={`${props.defaultText}-0`} value="0">{props.defaultText}</option>);
    opts = [defaultOption, ...props.options];
  }
  return (
    <FormGroup className="row">
      <Label lg={3}>
        {props.label}
      </Label>
      <Col lg={9}>
        <Input id={props.name} invalid={!!invalid} type="select" value={value || ''} onChange={ev => updateValue(ev.target.value)}>
          {opts}
        </Input>
        <FormFeedback>
          {invalid ? invalid.errorMessage : null}
        </FormFeedback>
      </Col>
    </FormGroup>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  defaultText: PropTypes.string,
  dependencies: PropTypes.array
};

Select.defaultProps = {
  options: [],
  dependencies: []
};

export default Select;