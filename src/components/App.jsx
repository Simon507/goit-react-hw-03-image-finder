import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import axios from 'axios';
// import * as basicLightbox from 'basiclightbox';

import { Component } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import { SearchQuerry } from './SearchQuerry';
import { ImageGallery } from './imageGallery/ImageGallery';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    collections: [],
    target: '',
    page: 1,
  };

  onSubmit = target => {
    this.setState({ target });
  };

  onBtnClick = e => {
    let pageNumber = this.state.page;
    pageNumber += 1;
    this.setState({ page: pageNumber });
  };

  onImageClick(webformatURL, tags) {
    //     const instance = basicLightbox.create(`
    //      <div className="overlay">
    //       <div className="modal">
    //         <img src="" alt="" />
    //       </div>
    //     </div>
    // `);

    //     instance.show();

    console.log(webformatURL);
    console.log(tags);
  }

  onFind = targetArr => {
    this.setState({ collections: targetArr });
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />

        <SearchBar onSubmit={this.onSubmit}></SearchBar>
        <SearchQuerry
          target={this.state.target}
          onFind={this.onFind}
          page={this.state.page}
        ></SearchQuerry>

        <ImageGallery
          collections={this.state.collections}
          onImageClick={this.onImageClick}
          onBtnClick={this.onBtnClick}
        ></ImageGallery>
      </Layout>
    );
  }
}
