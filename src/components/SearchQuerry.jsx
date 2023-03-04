import axios from 'axios';
import { Component } from 'react';

export class SearchQuerry extends Component {
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.target !== this.props.target ||
      prevProps.page !== this.props.page
    ) {
      const response = await axios.get(
        `?q=${this.props.target}&page=${this.props.page}&key=32355141-118a8dcb9c7f98144e9365121&image_type=photo&orientation=horizontal&per_page=12`
      );
      let targetArr = response.data.hits;
      console.log(targetArr);
      this.props.onFind(targetArr);
    }
  }

  render() {
    return;
  }
}
