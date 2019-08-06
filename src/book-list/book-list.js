import React from 'react';
import {Component} from 'react';
import {BOOKS} from './data';
import {BookListRows} from '../book-list-rows/book-list-rows';
import {BookListGrid} from  '../book-list-grid/book-list-grid';
import './book-list.css';

export class BookList extends Component {
  viewType = {
    rows: 'rows',
    grid: 'grid'
  };

  constructor(props) {
    super(props);

    this.state = {
      viewType: this.viewType.rows
    };
  }

  onViewTypeSwitchClick = viewType => this.setState({viewType});

  getActiveStyle = viewType => {
    return this.state.viewType === viewType ? 'view-type-button--active' : '';
  };

  render() {
    return (
      <>
        <div className='view-type-buttons'>
          <button
            type='button'
            className={`view-type-button ${this.getActiveStyle(this.viewType.rows)}`}
            onClick={() => this.onViewTypeSwitchClick(this.viewType.rows)}>
            Rows
          </button>
          <button
            type='button'
            className={`view-type-button ${this.getActiveStyle(this.viewType.grid)}`}
            onClick={() => this.onViewTypeSwitchClick(this.viewType.grid)}>
            Grid
          </button>
        </div>

        {
          this.state.viewType === this.viewType.rows
            ? <BookListRows books={BOOKS}/>
            : <BookListGrid books={BOOKS}/>
        }
      </>
    );
  }
}
