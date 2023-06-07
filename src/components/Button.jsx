import PropTypes from 'prop-types';

export const Button = ({ click }) => {
  return (
    <button className="button" onClick={click}>
      Load more...
    </button>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
};
