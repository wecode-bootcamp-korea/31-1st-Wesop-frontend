import React from 'react';
import { Link } from 'react-router-dom';
import BaseInfo from '../../../components/BaseInfo/BaseInfo';
import Footer from '../../../components/Footer/Footer';
import './ProductListLayout.scss';

const ProductListLayout = ({ children, productList }) => {
  return (
    <div className="ProductList">
      <header>
        <Link to="/">
          <img className="logo" alt="logo" src="/images/common/Wesop.png" />
        </Link>
      </header>
      {children}
      <BaseInfo
        subtitle={subtitle}
        title={title}
        description={description}
        btnText={btnText}
        imgSrc={imgSrc}
      />
      <Footer />
    </div>
  );
};

export default ProductListLayout;

const { subtitle, title, description, btnText, imgSrc } = {
  subtitle: '',
  title: '내 피부 이해하기',
  description:
    '피부의 특성과 필요를 더 깊이 이해하여 피부를 정화하고 영양을 공급하며 보호하는 데 가장 적합한 제품을 선택하려면 본 가이드를 자세히 살펴보시기 바랍니다.',
  btnText: '자세히 살펴보기',
  imgSrc:
    'https://github.com/suhun96/wesope-img-repo/blob/main/%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C/1123123.jpg?raw=true',
};
