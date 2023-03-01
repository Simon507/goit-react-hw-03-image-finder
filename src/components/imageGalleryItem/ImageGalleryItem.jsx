import PropTypes from 'prop-types';
import { ImageItem } from './ImageGalleryItem.styles';

export const ImageGalleryItem = ({ webformatURL, tags, onImageClick }) => {
  return (
    <>
      <ImageItem
        src={webformatURL}
        alt={tags}
        className="gallery-item"
        onClick={e => {
          e.preventDefault();
          onImageClick(webformatURL, tags);
        }}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
