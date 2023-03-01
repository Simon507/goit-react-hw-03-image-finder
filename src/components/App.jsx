import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import axios from 'axios';
// import * as basicLightbox from 'basiclightbox';

import { Component } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import { ImageGallery } from './imageGallery/ImageGallery';

axios.defaults.baseURL = 'https://pixabay.com/api/';

let setQuerry = '';
let targetArr = [];

export class App extends Component {
  state = {
    collections: [],
    target: '',
  };

  onSubmit(value) {
    setQuerry = value;
    console.log(setQuerry);
  }

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

  async componentDidMount() {
    const response = await axios.get(
      `?q=${setQuerry}&page=1&key=32355141-118a8dcb9c7f98144e9365121&image_type=photo&orientation=horizontal&per_page=12`
    );

    targetArr = response.data.hits;
    console.log(targetArr);
    this.setState(prevstate => {
      return { collections: [prevstate.collections, targetArr] };
    });
  }
  // async onSubmit(value) {
  //   console.log(value);
  //   const response = await axios.get(
  //     '?q=cat&page=1&key=32355141-118a8dcb9c7f98144e9365121&image_type=photo&orientation=horizontal&per_page=12'
  //   );

  //   const targetArr = response.data.hits;
  //   console.log(targetArr);
  // }

  render() {
    return (
      <Layout>
        <GlobalStyle />

        <SearchBar onSubmit={this.onSubmit}></SearchBar>

        <ImageGallery
          collections={targetArr}
          onImageClick={this.onImageClick}
        ></ImageGallery>
      </Layout>
    );
  }
}
