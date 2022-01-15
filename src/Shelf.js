import React, { Component } from "react";
import Book from "./Book.js";
import "./App.css";

class Shelf extends Component {
  render() {
    const { shelfName, updateShelf, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid" key={shelfName}>
            {books &&
              books.map((book) => (
                <li key={book.id}>
                  <Book bookInfo={book} update={updateShelf} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
