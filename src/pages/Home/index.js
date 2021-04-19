import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardGroup,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import api from "../../services/api";

import notFound from '../../assets/no-image-available.jpg';

const Home = () => {
  const [books, setBooks] = useState();

  const [query, setQuery] = useState();

  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await api.get('?q=lisp')
    setBooks(response.data.items);
  }, []);

  async function handleSearchBooks() {
    history.push({
      pathname: '/search',
      state: { query },
    });
  }

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="mt-5">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon size="md" icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              name="query"
              label="search"
              placeholder="Search book"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  handleSearchBooks()
                }
              }}
            >
            </Input>
          </InputGroup>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col><h2>Hi, <font style={{ color: '#FE6879' }}>Mehmed Al Fatih 👋</font></h2></Col>
      </Row>

      <Row className="mt-5">
        <Col xs="10"><h3>Discover new books </h3></Col>
        <Col xs="2"><p style={{ color: '#4ABDF1', fontSize: '14px' }}>more</p></Col>
        {books && books.slice(4, 7).map((item) => {
          return (
            <Col xs="4">
              <Link to={{
                pathname: "/detail",
                state: { book: item }
              }}>
                <CardGroup className="m-2">
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      style={{
                        maxHeight: '350px',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                      top
                      src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : notFound}
                    />
                  </Card>
                </CardGroup>
              </Link>
            </Col>
          )
        })}
      </Row>

      <Row className="mt-5">
        <Col xs="10"><h3>Currently reading</h3></Col>
        <Col xs="2"><p style={{ color: '#4ABDF1', fontSize: '14px' }}>All</p></Col>
        {books && books.slice(4, 7).map((item) => {
          return (
            <Col xs="4">
              <Link to={{
                pathname: "/detail",
                state: { book: item }
              }}>
                <CardGroup className="m-2">
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      style={{
                        maxHeight: '350px',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                      top
                      src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : notFound}
                    />
                  </Card>
                </CardGroup>
              </Link>
            </Col>
          )
        })}
      </Row>

      <Row className="mt-5">
        <Col xs="10"><h3>Reviews of the day</h3></Col>
        <Col xs="2"><p style={{ color: '#4ABDF1', fontSize: '14px' }}>All video</p></Col>
        {books && books.slice(7, 12).map((item) => {
          return (
            <Col xs="4">
              <Link to={{
                pathname: "/detail",
                state: { book: item }
              }}>
                <CardGroup className="m-2">
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      style={{
                        height: '150px',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                      top
                      src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : notFound}
                    />
                  </Card>
                </CardGroup>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container >
  )
};
export default Home;