import React from 'react';
import CategoryProduct from './CategoryProduct/CategoryProduct';
import './CategoryList.scss';

const CategoryList = ({ productList, categoryInfo }) => {
  function receivedMarkup() {
    return { __html: categoryInfo[0].categorySubDescription };
  }

  return (
    <main className="categoryList">
      <div className="categoryTitleWrapper">
        {categoryInfo.length === 1 && (
          <div dangerouslySetInnerHTML={receivedMarkup()} />
        )}
      </div>
      {productList &&
        productList.map(
          ({ id, productName, size, price, url, skin_type, feeling }) => {
            return (
              <CategoryProduct
                key={id}
                products={{
                  id,
                  productName,
                  size,
                  price,
                  url,
                  skin_type,
                  feeling,
                }}
              />
            );
          }
        )}
    </main>
  );
};

export default CategoryList;
