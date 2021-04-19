import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PageNotFound = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h4>Page not found!</h4>
        </Col>
      </Row>
    </Container>
  )
};

export default PageNotFound;