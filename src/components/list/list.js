/* eslint-disable import/no-unresolved */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './list.css';

const uniqid = require('uniqid');

class List extends React.Component {
  deleteItem = (event) => {
    const { deleteListItem } = this.props;
    deleteListItem(event);
  }

  createListItem = (props) => (
    <>
      {props.map((item) => (
        <ListGroup.Item key={uniqid()}>
          <Row id={item.id}>
            <Col xs={8} md={8} lg={9}>
              {item.value}
            </Col>
            <Col xs={1}>
              <Button variant="light" onClick={this.deleteItem}><FontAwesomeIcon icon={faTrash} /></Button>
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
    const { Items } = this.props;
    console.log(Items);
    return (
      <Container>
        <ListGroup>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              {this.createListItem(Items)}
            </Col>
          </Row>
        </ListGroup>
      </Container>
    );
  }
}

List.propTypes = {
  Items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
