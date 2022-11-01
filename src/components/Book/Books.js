import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
import { Container } from "@mui/material";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <section>
      <Container style={{marginTop: '60x'}}>
        <ul>
          {books &&
            books.map((book, i) => (
              <li key={i}>
                <Book book={book} />
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};

export default Books;
