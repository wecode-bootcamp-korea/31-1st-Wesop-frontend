import React from 'react';
import './CategoryList.scss';
import CategoryProduct from './CategoryProduct/CategoryProduct';

const CategoryList = ({ productList, categoryInfo }) => {
  return (
    <main className="categoryList">
      <div className="categoryTitleWrapper">
        {categoryInfo.categorySubDescription}
      </div>
      {productList.map(({ id, productName, size, price, url }) => {
        return (
          <CategoryProduct
            key={id}
            products={{ id, productName, size, price, url }}
          />
        );
      })}
    </main>
  );
};

export default CategoryList;
