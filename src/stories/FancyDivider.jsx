import React from 'react';
import PropTypes from 'prop-types';
import './fancy-divider.css';


export const FancyDivider = ({backgroundColor, ...props}) => {
  return (
    <div
      className="storybook-fancy-divider"
      style={backgroundColor && { backgroundColor }}
    >

    </div>
  );
};

FancyDivider.propTypes = {
    backgroundColor: PropTypes.string,
};

FancyDivider.defaultProps = {
    backgroundColor: null,
  };