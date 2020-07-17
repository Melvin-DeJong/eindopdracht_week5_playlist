import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.searchChange = this.searchChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  searchChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.onSearchTermSubmit(this.state.term);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitSearch} >
          <input
            type="text"
            placeholder="Zoeken op Youtube"
            className="searchInputVideo"
            onChange={this.searchChange}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;