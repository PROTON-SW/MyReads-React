import React, { Component } from "react";
import "./App.css";

class Book extends Component {
  render() {
    const { bookInfo } = this.props;
    return (
      <li key={bookInfo.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${bookInfo.imageLinks.smallThumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookInfo.title}</div>
          <div className="book-authors">{bookInfo.authors[0]}</div>
        </div>
      </li>
    );
  }
}

export default Book;
