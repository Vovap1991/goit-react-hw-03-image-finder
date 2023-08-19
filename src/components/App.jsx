import React, { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
    });
  };

  setImages = () => {};

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
          <Button />
        </div>
      </div>
    );
  }
}
