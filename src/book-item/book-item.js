import React from 'react';
import {Component} from 'react';
import {BookImage} from '../book-image/book-image';
import './book-item.css';

export class BookItem extends Component {
  render() {
    return (
      <div className='book-item'>
        <BookImage
          image={this.props.image}
        />

        <div className='book-item__content'>
          <h1 className='book-item__title'>{this.props.title}</h1>
          <p className='book-item__text'>
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}
