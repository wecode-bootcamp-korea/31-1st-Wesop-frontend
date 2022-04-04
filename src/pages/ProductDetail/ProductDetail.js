import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDetailSection from './ProductDetailSection';
import ProductDetailService from './ProductDetailService';
import ProductDetailArticle from './ProductDetailArticle';
import ProductDetailAside from './ProductDetailAside';
import ProductDetailModal from './ProductDetailModal';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [mainDescription, setMainDescription] = useState([]);

  const [subDescription, setSubDescription] = useState([]);

  const [bottmScrollDescription, setBottmScrollDescription] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  const indicatorRef = useRef(null);

  const TOTAL_SLIDES = 4;

  const slideTransition = currentSlide * 14.25;

  const indicatorTranslation = currentSlide * 100;

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

  const [showModal, setShowModal] = useState(false);

  const changeModalHandler = () => {
    showModal ? setShowModal(false) : setShowModal(true);
    document.body.style.overflow = showModal ? 'auto' : 'hidden';
  };

  const navigate = useNavigate();

  const goToCategory = () => {
    navigate();
  };

  const goToSubCategory = () => {
    navigate();
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideTransition}%)`;

    indicatorRef.current.style.transition = 'all 0.5s ease-in-out';
    indicatorRef.current.style.transform = `translate(${indicatorTranslation}%)`;
  });

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

  return (
    <div>
      {showModal ? (
        <ProductDetailModal
          ingredients={mainDescription.ingredients}
          onChangeModal={changeModalHandler}
        />
      ) : null}

      <Nav />

      <div className="productDetailBackground">
        <img
          className="productDetailLogo"
          src="images/productDetail/Wesop.png"
          alt="스킨"
        />

        <ProductDetailSection
          mainDescription={mainDescription}
          changeModalHandler={changeModalHandler}
          goToCategory={goToCategory}
          goToSubCategory={goToSubCategory}
        />

        <ProductDetailService />

        <ProductDetailArticle subDescription={subDescription} />

        <aside className="productDetailAside">
          <div className="productDetailButton">
            <button className="prev" onClick={PrevSlide}>
              <i className="fa-solid fa-angle-left" />
            </button>
            <button className="next" onClick={NextSlide}>
              <i class="fa-solid fa-angle-right" />
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

      <Footer />
    </div>
  );
};

export default ProductDetail;
