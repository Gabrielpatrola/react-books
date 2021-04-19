import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, CardImg } from 'reactstrap';

import notFound from '../../assets/no-image-available.jpg';

const Detail = () => {
  const location = useLocation();

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="d-flex justify-content-center mt-5">
          <CardImg top src={
            location.state.book.volumeInfo.imageLinks ?
              location.state.book.volumeInfo.imageLinks.thumbnail :
              notFound
          } alt="Card image cap"
            style={{
              height: 'auto',
              maxHeight: '250px',
              width: 'auto',
              maxWidth: '250px'
            }}
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-left mt-5">
        <Col>
          <h5>{location.state.book.volumeInfo.title}</h5>
          <h6 style={{ color: '#FF6978' }} className="mb-2">{location.state.book.volumeInfo.authors ? location.state.book.volumeInfo.authors : 'Unknow Author'}</h6>

          <p className="text-muted">{location.state.book.volumeInfo.description}</p>
        </Col>
      </Row>
    </Container>
  )
};

export default Detail;