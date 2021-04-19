import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
import {
  Row,
  Col,
  CardGroup,
  Container,
  CardImg,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import api from "../../services/api";

import notFound from '../../assets/no-image-available.jpg';

const Search = () => {
  const location = useLocation();
  const [books, setBooks] = useState();
  const [query, setQuery] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await api.get(`?q=${location.state.query}`)
    setBooks(response.data.items);
  }, [location.state.query]);


  async function handleSearchBooks() {
    const responseSearch = await api.get(`?q=${query}`)
    setBooks(responseSearch.data.items);
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
      <Row xs="4" className="mt-5">
        {books && books.slice(0, 40).map((item) => {
          return (
            <Col xs="4">
              <Link to={{
                pathname: "/detail",
                state: { book: item }
              }}>
                <CardGroup className="m-2">
                  <CardImg top src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : notFound} alt="Card image cap"
                    style={{
                      height: 'auto',
                      maxHeight: '250px',
                      width: 'auto',
                      maxWidth: '250px'
                    }}
                  />
                  <p>{item.volumeInfo.title.length > 30
                    ? item.volumeInfo.title.substring(0, 30 - 3) + '...'
                    : item.volumeInfo.title}</p>
                  <p className="mb-2 text-muted">by {item.volumeInfo.authors ? item.volumeInfo.authors : 'Unknow Author'}</p>
                </CardGroup>
              </Link>
            </Col>
          )
        })}
      </Row >
    </Container>
  )
};

export default Search;