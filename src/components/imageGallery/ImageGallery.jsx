import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Imagelist, GalleryItem } from './ImageGallery.styles';

export const ImageGallery = ({ collections, onImageClick, onBtnClick }) => {
  return (
    <Imagelist className="gallery">
      {collections.map(item => (
        <GalleryItem key={item.id}>
          <ImageGalleryItem
            webformatURL={item.webformatURL}
            tags={item.tags}
            onImageClick={onImageClick}
          />
        </GalleryItem>
      ))}
      {collections.length > 0 && (
        <button type="button" onClick={onBtnClick}>
          Load more
        </button>
      )}
    </Imagelist>
  );
};

ImageGallery.propTypes = {
  collections: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
