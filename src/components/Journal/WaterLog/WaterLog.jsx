import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import '../MoodSelector/MoodSelector.scss'


const MoodSelector = ({ onSelect, isOpen, onClose }) => {
    const waters = ['1 glass', '2 glass', '3 glass', '4 glass', '5 glass','6 glass','6+ glass','Too Much'];
  
    const handleSelect = (water) => {
      onSelect(water);
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="mood-selector">
          {waters.map((water) => (
            <button  className="button"key={water} onClick={() => handleSelect(water)}>{water}</button>
          ))}
        </div>
      </Modal>
    );
  };
  
  MoodSelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  
  export default MoodSelector;
