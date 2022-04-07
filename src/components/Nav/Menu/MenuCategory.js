import React from 'react';
import { useNavigate } from 'react-router-dom';
import CATEGORY_LIST from './CATEGORY_LIST';
import SKIN_TYPE_LIST from './SKIN_TYPE_LIST';
import './MenuCategory.scss';

const MenuCategory = () => {
  const navigate = useNavigate();

  const categoryHandler = () => {
    navigate('/product-list');
  };

  return (
    <div className="menuCategory">
      <ul className="categoryList">
        <li className="categoryTitle">카테고리</li>
        {CATEGORY_LIST.map(({ name }) => (
          <li key={name} className="listItem" onClick={categoryHandler}>
            {name}
          </li>
        ))}
      </ul>
      <ul className="skinTypeList">
        <li className="skinTypeTitle">피부타입</li>
        {SKIN_TYPE_LIST.map(({ name }) => (
          <li key={name} className="skinType">
            {name}
          </li>
        ))}
      </ul>
      <ul className="newProductList">
        <li className="newProductTitle">신제품</li>
        <li className="newProduct">이그절티드 아이 세럼</li>
      </ul>
    </div>
  );
};

export default MenuCategory;
