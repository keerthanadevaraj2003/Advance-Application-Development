import React from 'react';
import { useNavigate } from 'react-router-dom';

const Thememenu = ({ title, imageUrl, description }) => {
  const navigate = useNavigate();

  return (
    <div className="--course-card">
      <div className="-card-top">
        <img src={imageUrl} alt={title} className="-card-image" />
      </div>
      <div className="-card-center">
        <h3 className="-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default Thememenu;
