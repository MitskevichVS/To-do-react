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

  toggleItem = (event) => {
    const { toggleListItem } = this.props;
    toggleListItem(event);
  }

  createListItem = (props) => (
    <>
      {props.map((item) => (
        <ListGroup.Item key={uniqid()}>
          <Row id={item.id}>
            <Col xs={7} md={7} lg={9} className={`${item.done === true ? 'toggle' : ''}`}>
              {item.value}
            </Col>
            <Col xs={2} md={2} lg={1}>
              <Button variant="light" onClick={this.deleteItem} className="button"><FontAwesomeIcon icon={faTrash} /></Button>
            </Col>
            <Col xs={2} md={2} lg={1}>
              <Button variant="light" onClick={this.toggleItem} className="button"><FontAwesomeIcon icon={faCheckCircle} /></Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </>
  )

  render() {
    const { Items } = this.props;
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
  toggleListItem: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  Items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
