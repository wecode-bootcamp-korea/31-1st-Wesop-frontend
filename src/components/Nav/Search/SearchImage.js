import React from 'react';
import './SearchImage.scss';

const SearchImage = () => {
  return (
    <div className="searchImage">
      <div className="imageWrapper">
        <img
          className="itemImage"
          src="https://user-images.githubusercontent.com/97911154/161189782-8ff852ca-00d1-4101-b646-168daf784170.png"
          alt="서치이미지"
        />
      </div>
    </div>
  );
};

export default SearchImage;
