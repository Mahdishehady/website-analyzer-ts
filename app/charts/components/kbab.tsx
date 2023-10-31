import React, { useState } from 'react';
import { RiMoreFill } from 'react-icons/ri';

const KababMenu = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    onEdit();
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <div className="kabab-menu">
      <button className="kabab-button" onClick={toggleMenu}>
        <RiMoreFill />
      </button>
      {isOpen && (
        <ul className="menu-options">
          <li onClick={handleEdit}>Edit</li>
          <li onClick={handleDelete}>Delete</li>
        </ul>
      )}
    </div>
  );
};

export default KababMenu;
