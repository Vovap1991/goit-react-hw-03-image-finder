import React, { Component } from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';

import { fetchImages } from '../../api';
import { Loader } from '../Loader/Loader';

import { MainContainer } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    noResults: false,
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

      this.setState({ loading: true });

      if (normalizedQuery === '') {
        alert('dhgfhgdvhjsd');
        this.setState({
          images: [],
          loading: false,
        });
        return;
      }

      try {
        const images = await fetchImages(normalizedQuery, this.state.page);

        if (images.length === 0) {
          this.setState({
            noResults: true,
            loading: false,
          });
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          loading: false,
        }));
      } catch (error) {
        console.log(error);
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <MainContainer>
        <div>
          <SearchBar onSubmit={this.changeQuery} />
        </div>
        <div>{loading ? <Loader /> : <ImageGallery images={images} />}</div>
        <div>
          {images.length !== 0 && <Button onClick={this.handleLoadMore} />}
        </div>
      </MainContainer>
    );
  }
}
