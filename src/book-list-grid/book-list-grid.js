import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import './book-list-grid.css';

export class BookListGrid extends Component {
  render() {
    return (
      <div className='book-list-grid'>
        {this.props.books.map((book, index) => {
          return (
            <BookItem
              key={index}
              viewType={'grid'}
              image={book.image}
              title={book.title}
              text={book.text}
            />
          );
        })}
      </div>
    );
  }
}
