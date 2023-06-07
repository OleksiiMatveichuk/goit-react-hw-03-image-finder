import PropTypes from 'prop-types';

export const ImageGallery = ({ children }) => {
  return <ul className="imageGallery">{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
