import React from 'react';
import PropTypes from 'prop-types';
import './card.css';


export const Card = ({ label, ...props }) => {
  return (
    <div
      className={['storybook-card'].join(' ')}
      {...props}
    >
      <div className="storybook-card-header">
        <div>{label}</div>
      </div>
      <div className="storybook-card-container">
        <p>LOREMJFKLDJSKLFSJDLKF FJKDSJFLSDLJKFSDJK</p>
        <p>LOREMJFKLDJSKLFSJDLKF FJKDSJFLSDLJKFSDJK</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
};


Card.defaultProps = {
  label: '',
};


