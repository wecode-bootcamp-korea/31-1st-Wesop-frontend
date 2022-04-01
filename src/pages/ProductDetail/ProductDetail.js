import React, { useState, useRef, useEffect } from 'react';
import ProductDetailSectionList from './ProductDetailSection';
import ProductDetailArticleList from './ProductDetailArticle';
import ProductDetailAsideList from './ProductDetailAside';
import ProductDetailModal from './ProductDetailModal';
import './ProductDetail.scss';
import './ProductDetailSection.scss';
import './ProductDetailArticle.scss';
import './ProductDetailAside.scss';
import './ProductDetailModal.scss';

const ProductDetail = () => {
  const [sectionList, setSectionList] = useState([]);

  const [articleList, setArticleList] = useState([]);

  const [asideList, setAsideList] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const slideRef = useRef(null);

  const TOTAL_SLIDES = 4;

  const slideTransition = currentSlide * 14.25;

  const NextSlide = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const PrevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
  };

  const changeModalHandler = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetail.json')
      .then(res => res.json())
      .then(data => {
        setSectionList(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetail.json')
      .then(res => res.json())
      .then(data => {
        setArticleList(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetailAsideList.json')
      .then(res => res.json())
      .then(data => {
        setAsideList(data);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideTransition}%)`;
  });

  return (
    <div>
      {showModal ? (
        <ProductDetailModal
          data={sectionList}
          onChangeModal={changeModalHandler}
        />
      ) : null}

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
              <i
                onClick={changeModalHandler}
                className="fa-regular fa-square-plus"
              />
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
            <div ref={slideRef} className="goodProductUseTogether">
              <div className="greatUseTogether">함께 사용하기 좋은 제품</div>
              {asideList.map(product => {
                return (
                  <ProductDetailAsideList key={product.id} product={product} />
                );
              })}
            </div>
          </div>
          <button className="Prev" onClick={PrevSlide} />
          <button className="Next" onClick={NextSlide} />
        </aside>
      </div>
    </div>
  );
};

export default ProductDetail;
