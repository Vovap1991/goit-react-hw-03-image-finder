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

      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
      }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <div>
          <SearchBar onSubmit={this.changeQuery} />
        </div>
        <div>
          <ImageGallery images={images} />
        </div>
        <div>
          <Button onClick={this.handleLoadMore} />
        </div>
      </div>
    );
  }
}
