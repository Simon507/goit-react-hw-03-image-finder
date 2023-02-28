import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import axios from 'axios';

import { Component } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import { ImageGallery } from './imageGallery/ImageGallery';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    collections: [],
  };

  async onSubmit(value) {
    console.log(value);
    const response = await axios.get(
      '?q=cat&page=1&key=32355141-118a8dcb9c7f98144e9365121&image_type=photo&orientation=horizontal&per_page=12'
    );

    const targetArr = response.data.hits;
    console.log(targetArr);
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />

        <SearchBar onSubmit={this.onSubmit}></SearchBar>

        <ImageGallery></ImageGallery>
      </Layout>
    );
  }
}
