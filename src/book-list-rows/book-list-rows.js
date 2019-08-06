import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import './book-list-rows.css';

export class BookListRows extends Component {
  render() {
    return (
      <div className='book-list-rows'>
        {this.props.books.map((book, index) => {
          return (
            <BookItem
              viewType={'rows'}
              key={index}
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
