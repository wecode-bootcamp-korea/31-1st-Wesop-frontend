import React, { useState, useEffect } from 'react';
import ProductListLayout from './ProductListLayout/ProductListLayout';
import Filter from './FIlter/Filter';
import Category from './Category/Category';
import './ProductList.scss';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/category_products.json')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <ProductListLayout>
      <h1 className="mainCategory">스킨</h1>
      <Filter productList={productList} />
      <main className="mainContent">
        {productList.map(
          ({ categoryId, categoryName, categoryDescription, products }) => {
            return (
              <Category
                key={categoryId}
                category={{
                  categoryId,
                  categoryName,
                  categoryDescription,
                  products,
                }}
              />
            );
          }
        )}
      </main>
    </ProductListLayout>
  );
};

export default ProductList;
