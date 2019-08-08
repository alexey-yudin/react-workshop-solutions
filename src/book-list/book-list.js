import React from 'react';
import {Component} from 'react';
import {BOOKS} from './data';
import {BookListRows} from '../book-list-rows/book-list-rows';
import {BookListGrid} from  '../book-list-grid/book-list-grid';
import {Link} from 'react-router-dom';
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

  componentDidMount() {
    const isRowsRoute = this.props.location.pathname === `/${this.viewType.rows}`
      || this.props.location.pathname === '/';
    const isGridRoute = this.props.location.pathname === `/${this.viewType.grid}`;

    if (isRowsRoute) {
      this.setState({viewType: this.viewType.rows})
    } else if (isGridRoute) {
      this.setState({viewType: this.viewType.grid});
    }
  }

  onViewTypeSwitchClick = viewType => this.setState({viewType});

  getActiveStyle = viewType => {
    return this.state.viewType === viewType ? 'view-type-button--active' : '';
  };

  render() {
    return (
      <>
        <div className='view-type-buttons'>
          <Link to={'/rows'}>
            <button
              type='button'
              className={`view-type-button ${this.getActiveStyle(this.viewType.rows)}`}
              onClick={() => this.onViewTypeSwitchClick(this.viewType.rows)}>
              Rows
            </button>
          </Link>

          <Link to='/grid'>
            <button
              type='button'
              className={`view-type-button ${this.getActiveStyle(this.viewType.grid)}`}
              onClick={() => this.onViewTypeSwitchClick(this.viewType.grid)}>
              Grid
            </button>
          </Link>
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
