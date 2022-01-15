import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

class SearchBar extends Component {
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState({ query: query });
    BooksAPI.search(this.state.query).then((data) => {
      if (data.error) {
        this.setState({ books: [] });
      } else {
        this.setState({ books: data });
      }
    });
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
            <ol className="books-grid">
              {this.state.books &&
                this.state.books.map((book) => (
                  <li key={book.id}>
                    <button
                      onClick={() => {
                        this.props.addBook(book, "wantToRead");
                      }}
                    >
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                        }}
                      />
                    </button>
                  </li>
                ))}
            </ol>
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
