import PropTypes from 'prop-types';

export const ImageGallery = ({ collections }) => {
  console.log(`MODAL`);
  return (
    <div className="overlay">
      <div className="modal">
        <img src="" alt="" />
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  collections: PropTypes.array.isRequired,
};
