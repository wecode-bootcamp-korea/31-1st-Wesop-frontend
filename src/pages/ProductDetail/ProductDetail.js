import React, { useState, useEffect } from 'react';
import ProductDetailSectionList from './ProductDetailSectionList';
import ProductDetailArticleList from './ProductDetailArticleList';
import ProductDetailAsideList from './ProductDetailAsideList';
import './ProductDetailSection.scss';
import './ProductDetailArticle.scss';
import './ProductDetailAside.scss';

const ProductDetail = () => {
  const [sectionList, setSectionList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetailSectionList.json')
      .then(res => res.json())
      .then(data => {
        setSectionList(data);
      });
  }, []);

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetailArticleList.json')
      .then(res => res.json())
      .then(data => {
        setArticleList(data);
      });
  }, []);

  const [asideList, setAsideList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetailAsideList.json')
      .then(res => res.json())
      .then(data => {
        setAsideList(data);
      });
  }, []);

  return (
    <>
      <nav className="nav" />
      <div className="productDetailBackground">
        <img
          className="productDetailLogo"
          src="images/productDetail/Wesop.png"
          alt="스킨"
        />
        <section className="productDetailSection">
          <div />
          <div />
          <div>
            <div className="productDetailSectionContainer">
              {sectionList.map(product => {
                return (
                  <ProductDetailSectionList
                    key={product.id}
                    product={product}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <div className="productDetailService">
          <div className="productDetailServiceMessage">
            <span className="serviceGift">무료 선물 포장 서비스</span>
            <br />
            주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.
          </div>
          <div className="productDetailServiceMessage">
            <span className="serviceGift">샘플 & 코튼 백 증정</span>
            <br />
            모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. <br />
            (샘플 종류는 임의 지정이 불가합니다.)
          </div>
        </div>

        {articleList.map(product => {
          return (
            <ProductDetailArticleList key={product.id} product={product} />
          );
        })}

        <aside className="productDetailAside">
          <div className="subProductDetailAside">
            <div className="goodProductUseTogether">
              <div className="greatUseTogether">함께 사용하기 좋은 제품</div>
              {asideList.map(product => {
                return (
                  <ProductDetailAsideList key={product.id} product={product} />
                );
              })}
            </div>
          </div>
          <button className="slide-1" onClick />
          <button className="slide-2" />
        </aside>
      </div>
    </>
  );
};
export default ProductDetail;
