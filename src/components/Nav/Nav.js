import React, { useEffect, useState } from 'react';
import CategoryElement from './CategoryElement';
import NAV_CATEGORY_LIST from './navCategoryData';
import USER_CATEGORY_LIST from './userCategoryData';
import './Nav.scss';
import { useSearchParams } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="navMainCategory">
        {NAV_CATEGORY_LIST.map(({ id, categoryName }) => (
          <CategoryElement key={id} categoryName={categoryName} />
        ))}
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="navUserCategory">
        {USER_CATEGORY_LIST.map(({ id, categoryName }) => (
          <CategoryElement key={id} categoryName={categoryName} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
