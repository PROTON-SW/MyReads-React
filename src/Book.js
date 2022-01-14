import React, { Component } from "react";
import "./App.css";

class Book extends Component {
  state = {
    book: this.props.bookInfo,
  };
  change = (event) => {
    this.props.update(this.props.bookInfo, event.target.value);
  };
  bookShelfChanger = (currentShelf) => {
    if (currentShelf === "currentlyReading") {
      return (
        <select onChange={this.change} value='move'>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      );
    } else if (currentShelf === "wantToRead") {
      return (
        <select onChange={this.change} value='move'>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      );
    } else if (currentShelf === "read") {
      return (
        <select onChange={this.change} value='move'>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="none">None</option>
        </select>
      );
    }
  };

  render() {
    const { book } = this.state;
    return (
      <li key={book.id.toString()}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              {this.bookShelfChanger(book.shelf)}
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors[0]}</div>
        </div>
      </li>
    );
  }
}

export default Book;
