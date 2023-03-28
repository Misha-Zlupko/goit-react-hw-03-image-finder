import { Component } from 'react';
import css from 'components/styles.css';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeSearch = e => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
    this.props.onSubmit(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              borderRadius: '2px',
              backgroundColor: '#3f51b5',
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              textAlign: 'center',
              display: 'inline-block',
              color: '#fff',
              border: '0',
              textDecoration: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '18px',
              lineHeight: '24px',
              fontStyle: 'normal',
              fontWeight: '500',
              minWidth: '180px',
              boxShadow:
                '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
            }}
            className={css.SearchForm_button}
          >
            <span className={css.button_label}>Search</span>
          </button>

          <input
            onChange={this.handleChangeSearch}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
          />
        </form>
      </header>
    );
  }
}
