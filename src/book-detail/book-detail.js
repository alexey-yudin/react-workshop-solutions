import React from 'react';
import {Component} from 'react';
import {BASE_URL} from '../constants/api';
import {BookItem} from '../book-item/book-item';
import './book-detail.css';

export class BookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`${BASE_URL}/get-by-id/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          book: data.book
        })
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className='book-detail'>
        <BookItem
          title={this.state.book.title}
          text={this.state.book.text || ''}
          image={this.state.book.image}
        />
      </div>
    );
  }
}
