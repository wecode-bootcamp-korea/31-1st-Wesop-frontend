import React from 'react';
import './SearchImage.scss';

const SearchImage = ({ productURL }) => {
  return (
    <div className="searchImage">
      <div className="imageWrapper">
        <img className="itemImage" src={productURL} alt="서치이미지" />
      </div>
      <div className="linkWrapper">더 알아보기</div>
    </div>
  );
};

export default SearchImage;
