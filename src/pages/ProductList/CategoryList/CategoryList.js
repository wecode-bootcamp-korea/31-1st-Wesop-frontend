import React from 'react';
import './CategoryList.scss';
import CategoryProduct from './CategoryProduct/CategoryProduct';

const CategoryList = ({
  productList: { categoryName, categoryDescription, products },
}) => {
  return (
    <main className="categoryList">
      <div className="categoryTitleWrapper">
        {/* //TODO: 아래 내용은 백엔드에서 tag까지 통으로 주기로 해서 해당 부분
        변경해주기 */}
        <h2 class="CPSubcatIntroDescription-headline">{categoryName}</h2>
        <p class="CPSubcatIntroDescription-info">{categoryDescription}</p>
      </div>
      {products.map(({ id, productName, size, price, url }) => {
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
