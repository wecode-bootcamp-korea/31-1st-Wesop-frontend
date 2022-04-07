import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailSection from './ProductDetailSection/ProductDetailSection';
import ProductDetailService from './ProductDetailService/ProductDetailService';
import ProductDetailArticle from './ProductDetailArticle/ProductDetailArticle';
import ProductDetailAside from './ProductDetailAside/ProductDetailAside';
import ProductDetailModal from './ProductDetailModal/ProductDetailModal';
import API from '../../config/config';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [mainDescription, setMainDescription] = useState([]);
  const [subDescription, setSubDescription] = useState([]);
  const [bottmScrollDescription, setBottmScrollDescription] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const params = useParams();

  const slideRef = useRef(null);
  const indicatorRef = useRef(null);

  const TOTAL_SLIDES = 4;
  const slideTransition = currentSlide * 14.25;
  const indicatorTranslation = currentSlide * 100;

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
  };

  const changeModalHandler = () => {
    showModal ? setShowModal(false) : setShowModal(true);
    document.body.style.overflow = showModal ? 'auto' : 'hidden';
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideTransition}%)`;
    indicatorRef.current.style.transition = 'all 0.5s ease-in-out';
    indicatorRef.current.style.transform = `translate(${indicatorTranslation}%)`;
  });

  useEffect(() => {
    fetch(`${API.mainDescription}${params.id}`)
      .then(res => res.json())
      .then(data => {
        setMainDescription(data.result[0]);
        setSubDescription(data.result[1]);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.bottomDescription}${params.id}`)
      .then(res => res.json())
      .then(data => {
        setBottmScrollDescription(data.result);
      });
  }, []);

  return (
    <div>
      {showModal ? (
        <ProductDetailModal
          ingredients={mainDescription.ingredients}
          onChangeModal={changeModalHandler}
        />
      ) : null}

      <div className="productDetailBackground">
        <img
          className="productDetailLogo"
          src="/images/productDetail/Wesop.png"
          alt="스킨"
        />

        <ProductDetailSection
          mainDescription={mainDescription}
          changeModalHandler={changeModalHandler}
          params={params}
        />

        <ProductDetailService />

        <ProductDetailArticle subDescription={subDescription} />

        <aside className="productDetailAside">
          <div className="productDetailButton">
            <button className="prev" onClick={prevSlide}>
              <i className="fa-solid fa-angle-left" />
            </button>
            <button className="next" onClick={nextSlide}>
              <i className="fa-solid fa-angle-right" />
            </button>
          </div>
          <div className="subProductDetailAside">
            <div ref={slideRef} className="goodProductUseTogether">
              <div className="greatUseTogether">함께 사용하기 좋은 제품</div>
              {bottmScrollDescription.map(product => {
                return (
                  <ProductDetailAside key={product.name} product={product} />
                );
              })}
            </div>
          </div>
          <div className="indicatorContainor">
            <div className="indicatorLine">
              <span className="indicatorBlock" ref={indicatorRef} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductDetail;
