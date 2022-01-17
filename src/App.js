import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBar from "./SearchBar.js";
import Shelf from "./Shelf.js";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((data) => this.setState({ books: data }));
  }
  updateShelf = (book, value) => {
    BooksAPI.update(book, value);
    book.shelf = value;
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book]),
    }));
  };

  render() {
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
                  updateShelf={this.updateShelf}
                  books={
                    this.state.books &&
                    this.state.books.filter(
                      (book) => book.shelf === "currentlyReading"
                    )
                  }
                />
                <Shelf
                  shelfName="Want to Read"
                  updateShelf={this.updateShelf}
                  books={
                    this.state.books &&
                    this.state.books.filter(
                      (book) => book.shelf === "wantToRead"
                    )
                  }
                />
                <Shelf
                  shelfName="Read"
                  updateShelf={this.updateShelf}
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
          <Route
            path="/search"
            element={<SearchBar addBook={this.updateShelf} />}
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
