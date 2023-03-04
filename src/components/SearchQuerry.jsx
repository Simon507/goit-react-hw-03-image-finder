import axios from 'axios';
import { Component } from 'react';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class SearchQuerry extends Component {
  state = {
    isLoading: false,
    errorMessage: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.target !== this.props.target ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ isLoading: true });
      //   console.log(`true`);

      const response = await axios
        .get(
          `?q=${this.props.target}&page=${this.props.page}&key=32355141-118a8dcb9c7f98144e9365121&image_type=photo&orientation=horizontal&per_page=12`
        )
        .catch(error => {
          console.log(error);
          this.setState({ errorMessage: error });
        })
        .finally(
          this.setState({ isLoading: false })
          //   , console.log(`false`)
        );

      this.props.onFind(response.data.hits, this.state.isLoading);
    }
  }

  render() {
    return;
  }
}
