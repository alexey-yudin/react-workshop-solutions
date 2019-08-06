import React from 'react';
import {Component} from 'react';
import './book-image.css';

export class BookImage extends Component {
  render() {
    return (
      <img className='book-image' src={this.props.image} alt=""/>
    );
  }
}
