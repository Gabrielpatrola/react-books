import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

const Home = () => {
  const [newBooks, setNewBooks] = useState();
  const [readingBooks, setReadingBooks] = useState();
  const [booksReviews, setBooksReviews] = useState();

  const [query, setQuery] = useState();

  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const responseNewBooks = await api.get('?q=search+terms')
    setNewBooks(responseNewBooks.data.items);

    const reponseReadingBooks = await api.get('?q=harry+potter')
    setReadingBooks(reponseReadingBooks.data.items);

    const responseBooksReviews = await api.get('?q=javascript')
    setBooksReviews(responseBooksReviews.data.items);
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
        <CardGroup>

          {newBooks && newBooks.slice(4, 8).map((item) => {
            return (
              <Card>
                <CardImg top width="100%" src={item.volumeInfo.imageLinks.thumbnail} alt="Card image cap" />
              </Card>
            )
          })}
        </CardGroup>

        <Row className="mt-5">
          <Col xs="12">

          </Col>
        </Row>
      </Row>

      <Row className="mt-5">
        <Col xs="10"><h3>Currently reading</h3></Col>
        <Col xs="2"><p style={{ color: '#4ABDF1', fontSize: '14px' }}>All</p></Col>
        <Row className="mt-5">
          <Col xs="12">
            <CardGroup>

              {readingBooks && readingBooks.slice(4, 8).map((item) => {
                return (
                  <Card>
                    <CardImg top width="100%" src={item.volumeInfo.imageLinks.thumbnail} alt="Card image cap" />
                  </Card>
                )
              })}
            </CardGroup>
          </Col>
        </Row>
      </Row>

      <Row className="mt-5">
        <Col xs="10"><h3>Reviews of the day</h3></Col>
        <Col xs="2"><p style={{ color: '#4ABDF1', fontSize: '14px' }}>All video</p></Col>
        <Row className="mt-5">
          <Col xs="12">
            <CardGroup>

              {booksReviews && booksReviews.slice(2, 6).map((item) => {
                return (
                  <Card>
                    <CardImg top width="100%" src={item.volumeInfo.imageLinks.smallThumbnail} alt="Card image cap" />
                  </Card>
                )
              })}
            </CardGroup>
          </Col>
        </Row>
      </Row>
    </Container >
  )
};
export default Home;