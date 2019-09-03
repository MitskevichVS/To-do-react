import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import './stub.css';

export default function Stub() {
  return (
    <Container className="alertContainer">
      <Alert variant="info">Nothing to do...</Alert>
    </Container>
  );
}
