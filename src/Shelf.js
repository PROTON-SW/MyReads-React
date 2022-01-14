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
          <ol className="books-grid">
            {books &&
              books.map((book) => (
                <Book bookInfo={book} update={updateShelf} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
