import React, { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar onSubmit={this.changeQuery} />
        </div>
        <div>
          <ImageGallery />
        </div>
        <div>
          <Button onClick={this.handleLoadMore} />
        </div>
      </div>
    );
  }
}
