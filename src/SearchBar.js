import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book.js";

class SearchBar extends Component {
  state = {
    query: "",
  };
  updateQuery = (query) => {
    this.setState({ query: query });
    BooksAPI.search(this.state.query).then((data) =>
      this.setState({ books: data })
    );
  };
  render() {
    console.log(this.state.books);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={this.state.query}
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            {/* {this.state.books &&
              this.state.books.map((book) => (
                <ol className="books-grid">
                  <Book bookInfo={book} />
                </ol>
              ))} */}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
