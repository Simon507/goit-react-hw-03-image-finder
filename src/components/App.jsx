import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Toaster } from './Toaster';

import { Component } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import { SearchQuerry } from './searchQuerry/SearchQuerry';
import { ImageGallery } from './imageGallery/ImageGallery';
import { ModalWindow } from './modal/ModalWindow';

export class App extends Component {
  state = {
    collections: [],
    target: null,
    targetArr: [],
    page: 1,
    modalOpen: false,
    modalSorse: '',
    modalTxt: '',
    errorMessage: null,
  };

  onSubmit = target => {
    if (!target) {
      this.setState({ errorMessage: 'Please enter any words for request' });
    } else {
      this.setState({ target });
      this.setState({ errorMessage: null });
    }
  };

  onBtnClick = e => {
    let pageNumber = this.state.page;
    pageNumber += 1;
    this.setState({ page: pageNumber });
  };

  onImageClick = (largeImageURL, tags) => {
    this.setState({ modalOpen: true });
    this.setState({ modalSorse: largeImageURL });
    this.setState({ modalTxt: tags });
  };
  onModalClose = () => {
    this.setState({ modalOpen: false });
  };

  onFind = (targetList, isLoading) => {
    const oldArr = this.state.collections;
    const newArr = oldArr.concat(targetList);
    this.setState({ collections: newArr });
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

        {this.state.modalOpen && (
          <ModalWindow
            largeImageURL={this.state.modalSorse}
            tags={this.state.modalTxt}
            onModalClose={this.onModalClose}
          ></ModalWindow>
        )}
        {this.state.errorMessage && (
          <Toaster message={this.state.errorMessage} />
        )}
      </Layout>
    );
  }
}
