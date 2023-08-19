import React, { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { fetchImages } from '../api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const newQuery = this.state.query;

    if (prevQuery !== newQuery || prevState.page !== this.state.page) {
      const normalizedQuery = newQuery.slice(newQuery.indexOf('/') + 1);

      const images = await fetchImages(normalizedQuery, this.state.page);
      console.log(images);
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
