import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import '../MoodSelector/MoodSelector.scss'


const MoodSelector = ({ onSelect, isOpen, onClose }) => {
    const moods = ['happy', 'sad', 'excited', 'grumpy', 'hungry','Motivated','tired','Relaxed'];
  
    const handleSelect = (mood) => {
      onSelect(mood);
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="mood-selector">
          {moods.map((mood) => (
            <button  className="button"key={mood} onClick={() => handleSelect(mood)}>{mood}</button>
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
