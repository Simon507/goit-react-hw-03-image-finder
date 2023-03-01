import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Imagelist } from './ImageGallery.styles';

export const ImageGallery = ({ collections }) => {
  return (
    <Imagelist className="gallery">
      {collections.map(item => (
        <ImageGalleryItem
          webformatURL={item.webformatURL}
          tags={item.tags}
          key={item.id}
        />
      ))}
    </Imagelist>
  );
};

ImageGallery.propTypes = {
  collections: PropTypes.array.isRequired,
};
