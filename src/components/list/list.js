import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class List extends React.Component {
  createListItem = (props) => (
    <>
      {props.ListItems.map((item, index) => (
        <ListGroup.Item key={index}>
          {item.title}
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
