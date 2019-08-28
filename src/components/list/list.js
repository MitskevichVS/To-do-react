/* eslint-disable import/no-unresolved */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const uniqid = require('uniqid');

class List extends React.Component {
  createListItem = (props) => (
    <>
      {props.ListItems.map((item) => (
        <ListGroup.Item key={uniqid()}>
          <Row>
            <Col xs={8} md={8} lg={9}>
              {item.title}
            </Col>
            <Col xs={1}>
              <Button variant="light"><FontAwesomeIcon icon={faTrash} /></Button>
            </Col>
            <Col xs={1}>
              <Button variant="light"><FontAwesomeIcon icon={faCheckCircle} /></Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </>
  )

  render() {
    return (
      <Container>
        <ListGroup>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              {this.createListItem(this.props)}
            </Col>
          </Row>
        </ListGroup>
      </Container>
    );
  }
}

export default List;
