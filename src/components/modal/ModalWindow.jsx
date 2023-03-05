import { Component } from 'react';
import { Overlay, ModalFrame } from './ModalWindow.styles';

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onModalClose();
      }
    });
  }

  render() {
    return (
      <Overlay className="overlay" onClick={this.props.onModalClose}>
        <ModalFrame className="modal">
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalFrame>
      </Overlay>
    );
  }
}
