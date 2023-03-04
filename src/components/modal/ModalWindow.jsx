import PropTypes from 'prop-types';

import { Overlay, ModalFrame } from './ModalWindow.styles';

// const ModalWindow = document.querySelector('.overlay');

export const ModalWindow = ({ largeImageURL, tags, onOverlayClick }) => {
  // const onKeyDown = e => {
  //   console.log(e);
  // };
  // ModalWindow.addEventListener('keydown', onKeyDown);

  return (
    <Overlay className="overlay" onClick={onOverlayClick}>
      <ModalFrame className="modal">
        <img src={largeImageURL} alt={tags} />
      </ModalFrame>
    </Overlay>
  );
};

ModalWindow.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
  // onKeyDown: PropTypes.func.isRequired,
};
