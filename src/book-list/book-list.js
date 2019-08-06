import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import {BOOKS} from './data';

export class BookList extends Component {
  render() {
    return (
      <>
        {BOOKS.map((book, index) => {
          return (
            <BookItem
              key={index}
              image={book.image}
              title={book.title}
              text={book.text}
            />
          );
        })}
      </>
    );
  }
}
