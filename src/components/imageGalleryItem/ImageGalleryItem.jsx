import PropTypes from 'prop-types';
import { ImageItem } from './ImageGalleryItem.styles';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <>
      <ImageItem src={webformatURL} alt={tags} className="gallery-item" />
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
