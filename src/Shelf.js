import React from "react";
import Book from "./Book.js";

function Shelf (props) {
    const { shelfName, updateShelf, books } = props;
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

export default Shelf;
