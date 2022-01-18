import React, { Component } from "react";

class Book extends Component {
  state = {
    book: this.props.bookInfo,
  };
  change = (event) => {
    this.props.update(this.props.bookInfo, event.target.value);
  };
  bookShelfChanger = (currentShelf) => {
    return (
      <select onChange={this.change} value={currentShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  };

  render() {
    const { book } = this.state;
    return (
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
            {this.bookShelfChanger("shelf" in book ? book.shelf : "none")}
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {"authors" in book ? book.authors[0] : ""}
        </div>
      </div>
    );
  }
}

export default Book;
