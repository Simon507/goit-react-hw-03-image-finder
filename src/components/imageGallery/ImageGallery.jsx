import { StyledComponent } from 'styled-components';

import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export const ImageGallery = () => {
  return (
    <ul class="gallery">
      <h3>ПОЛЕ ДЛЯ КОЛЛЕКЦИИ </h3>
      <ImageGalleryItem />
    </ul>
  );
};
