import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book.js";
import "./App.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.updateQuery = this.updateQuery.bind(this);
    this.input = React.createRef();
  }
  state = {
    books: [],
    query: "",
  };

  updateQuery = (query) => {
    this.setState({ query: query });
    if (this.state.query === "") {
      this.setState({ books: [] });
    } else {
      BooksAPI.search(this.state.query)
        .then((data) => {
          let books = data;
          books.forEach((book) => {
            let mainBooks = this.props.mainBooks.filter(
              (mainBook) => book.id === mainBook.id
            );
            if(mainBooks.length > 0) {
              book.shelf = mainBooks[0].shelf
            } else{
              book.shelf='none';
            }
          });

          this.setState({ books: data });
        })
        .catch((err) => {
          alert("Book not found");
        });
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              ref={this.input}
              value={this.state.query}
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query !=='' &&
              this.state.books
                .filter((book) => "imageLinks" in book)
                .map((book) => (
                  <li key={book.id}>
                    <Book bookInfo={book} update={this.props.addBook} />
                  </li>
                ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBar;
