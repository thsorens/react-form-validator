import React from 'react';
import {
  FormGroup,
  Label,
  ButtonGroup,
  Button,
  Col
} from 'reactstrap';

import PropTypes from 'prop-types';
import useRegisterComponent from '../use-register';

const Select = (props) => {
  const { value, update } = useRegisterComponent(props);

  return (
    <FormGroup className="row" id={props.name}>
      <Label lg={3}>
        {props.label}
      </Label>
      <Col lg={9}>
        <ButtonGroup>
          {props.options.map(o => (
            <Button
              size="sm"
              key={o.value}
              color="info"
              outline
              onClick={() => update(o.value)}
              active={o.value === value}
            >
              {o.name}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
    </FormGroup>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Select.defaultProps = {
  options: []
};

export default Select;