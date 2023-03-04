import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Toast from 'react-bootstrap/Toast';

// import * as basicLightbox from 'basiclightbox';

import { Component } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import { SearchQuerry } from './SearchQuerry';
import { ImageGallery } from './imageGallery/ImageGallery';
import Loader from './loader/Loader';

export class App extends Component {
  state = {
    collections: [],
    target: '',
    targetArr: [],
    page: 1,
    onLoad: false,
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

  onFind = (targetList, isLoading) => {
    const oldArr = this.state.collections;
    const newArr = oldArr.concat(targetList);
    this.setState({ collections: newArr });
    this.setState({ onLoad: isLoading });
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
        {this.state.onLoad ? (
          <Loader></Loader>
        ) : (
          <ImageGallery
            collections={this.state.collections}
            onImageClick={this.onImageClick}
            onBtnClick={this.onBtnClick}
          ></ImageGallery>
        )}
        <>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </>
      </Layout>
    );
  }
}
