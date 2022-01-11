import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import Book from "./Book.js";

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
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {this.state.books &&
                            this.state.books
                              .filter(
                                (book) => book.shelf === "currentlyReading"
                              )
                              .map((book) => <Book bookInfo={book} />)}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {this.state.books &&
                            this.state.books
                              .filter(
                                (book) => book.shelf === "wantToRead"
                              )
                              .map((book) => <Book bookInfo={book} />)}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {this.state.books &&
                            this.state.books
                              .filter((book) => book.shelf === "read")
                              .map((book) => <Book bookInfo={book} />)}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
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
