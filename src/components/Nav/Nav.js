import React from 'react';
import CategoryElement from './CategoryElement';
import NAV_CATEGORY_LIST from './navCategoryData';
import USER_CATEGORY_LIST from './userCategoryData';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="navMainCategory">
        {NAV_CATEGORY_LIST.map(list => (
          <CategoryElement key={list.id} categoryName={list.categoryName} />
        ))}
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="navUserCategory">
        {USER_CATEGORY_LIST.map(list => (
          <CategoryElement key={list.id} categoryName={list.categoryName} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
