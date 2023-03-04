import axios from 'axios';
import { Component } from 'react';

export class SearchQuerry extends Component {
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.target !== this.props.target) {
      const response = await axios.get(
        `?q=${this.props.target}&page=${this.props.page}&key=32355141-118a8dcb9c7f98144e9365121&image_type=photo&orientation=horizontal&per_page=12`
      );
      let targetArr = response.data.hits;
      this.props.onFind(targetArr);
    }
  }

  render() {
    return;
  }
}
