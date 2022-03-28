import React from 'react';
import NAV_CATEGORY_LIST from './navCategoryData';
import USER_CATEGORY_LIST from './userCategoryData';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="navCategory">
        {NAV_CATEGORY_LIST.map(list => (
          <span key={list.id} className="navCategoryElement">
            {list.categoryName}
          </span>
        ))}
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="userCategory">
        {USER_CATEGORY_LIST.map(list => (
          <span key={list.id} className="userCategoryElement">
            {list.categoryName}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Nav;
