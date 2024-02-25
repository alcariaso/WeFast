import React from 'react';
import PropTypes from 'prop-types';
import '../Modal/Modal.scss';

const Modal = ({ children }) => {
    
  return (
    <div className="modal">
      <div className="modal__overlay" />
      <div className="modal__content">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;

