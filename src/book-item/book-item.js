import React from 'react';
import {Component} from 'react';
import {BookImage} from '../book-image/book-image';
import './book-item.css';

export class BookItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  toggleText = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    return (
      <div className='book-item'>
        <BookImage
          image={this.props.image}
        />

        <div className='book-item__content'>
          <h1 className='book-item__title'>{this.props.title}</h1>

          <p className='book-item__text'>
            {
              this.state.isExpanded
                ? this.props.text
                : `${this.props.text.slice(0, 10)}...`
            }
            <button type='button' onClick={this.toggleText}>
              {this.state.isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </p>
        </div>
      </div>
    );
  }
}
