import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import Shelf from "./Shelf.js";

class BooksApp extends React.Component {
  state = {};

  componentDidMount() {
    BooksAPI.getAll().then((data) => this.setState({ books: data }));
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <Shelf
                  shelfName="Currently Reading"
                  books={
                    this.state.books &&
                    this.state.books.filter(
                      (book) => book.shelf === "currentlyReading"
                    )
                  }
                />
                <Shelf
                  shelfName="Want to Read"
                  books={
                    this.state.books &&
                    this.state.books.filter(
                      (book) => book.shelf === "wantToRead"
                    )
                  }
                />
                <Shelf
                  shelfName="Read"
                  books={
                    this.state.books &&
                    this.state.books.filter((book) => book.shelf === "read")
                  }
                />
                <div className="open-search">
                  <Link className="add-book" to="/search">
                    Add a book
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
