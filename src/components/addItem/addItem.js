import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

export default function AddItem(props) {
  const { AddListItem } = props;
  return (
    <Container>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="What you need to do"
          id="addInput"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={AddListItem}>Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
}

AddItem.propTypes = {
  AddListItem: PropTypes.func.isRequired,
};
