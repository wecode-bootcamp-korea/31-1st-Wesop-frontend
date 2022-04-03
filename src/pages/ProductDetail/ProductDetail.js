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
  const [mainDescription, setMainDescription] = useState([]);
  const [subDescription, setSubDescription] = useState([]);
  const [bottmScrollDescription, setBottmScrollDescription] = useState([]);

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
    document.body.style.overflow = showModal ? 'auto' : 'hidden';
  };

  // // 실제서버
  // useEffect(() => {
  //   fetch('http://10.58.5.254:8000/products/detail/1')
  //     .then(res => res.json())
  //     .then(data => {
  //       setMainDescription(data.result[0]);
  //       setSubDescription(data.result[1]);
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch('http://10.58.5.254:8000/products/recommend/1')
  //     .then(res => res.json())
  //     .then(data => {
  //       setBottmScrollDescription(data.result[0]);
  //     });
  // }, []);

  // mock data
  useEffect(() => {
    fetch('http://localhost:3000/data/mainDescription.json')
      .then(res => res.json())
      .then(data => {
        setMainDescription(data[0]);
        setSubDescription(data[1]);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/bottomDescription.json')
      .then(res => res.json())
      .then(data => {
        setBottmScrollDescription(data);
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
          ingredients={mainDescription.ingredients}
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
              <ProductDetailSectionList mainDescription={mainDescription} />
            </div>
          </div>
        </section>

        <section className="productDetailService">
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
        </section>

        <article>
          <ProductDetailArticleList subDescription={subDescription} />
        </article>

        <aside className="productDetailAside">
          <div className="ProductDetailButton">
            <button className="Prev" onClick={PrevSlide}>
              <i className="fa-solid fa-angle-left" />
            </button>
            <button className="Next" onClick={NextSlide}>
              <i class="fa-solid fa-angle-right" />
            </button>
          </div>
          <div className="subProductDetailAside">
            <div ref={slideRef} className="goodProductUseTogether">
              <div className="greatUseTogether">함께 사용하기 좋은 제품</div>
              {bottmScrollDescription.map(product => {
                return (
                  <ProductDetailAsideList
                    key={product.name}
                    product={product}
                  />
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductDetail;
