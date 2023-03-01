import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Imagelist, GalleryItem } from './ImageGallery.styles';

export const ImageGallery = ({ collections }) => {
  return (
    <Imagelist className="gallery">
      {collections.map(item => (
        <GalleryItem>
          <ImageGalleryItem
            webformatURL={item.webformatURL}
            tags={item.tags}
            key={item.id}
          />
        </GalleryItem>
      ))}
    </Imagelist>
  );
};

ImageGallery.propTypes = {
  collections: PropTypes.array.isRequired,
};
