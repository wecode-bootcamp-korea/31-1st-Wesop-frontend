import React, { useState } from 'react';
import './ProductList.scss';
import Category from './Category/Category';
import { useEffect } from 'react';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/category_products.json')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="ProductList">
      <nav style={{ height: 80, backgroundColor: 'black' }}>wesop</nav>
      <header>
        <img className="logo" alt="logo" src="/images/common/Wesop.png" />
        <h1 className="mainCategory">스킨</h1>
      </header>
      <div className="filterWrapper">
        <ul className="filterSubNavContainer">
          <li className="filterSubNavList">
            <button className="filterSubNavLink">모든 스킨 </button>
          </li>
          {CATEGORY_LIST.map(category => {
            return (
              <li key={category.id} className="filterSubNavList">
                <button className="filterSubNavLink">
                  {category.category}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="filterBtnContainer">
          <button className="filterBtn">
            <span className="filterBtnText">필터</span>
            <span>
              <i className="fa-solid fa-angle-down filterBtnIcon" />
            </span>
          </button>
        </div>
      </div>
      <main className="mainContent">
        {productList.map(category => {
          return <Category key={category.categoryId} {...category} />;
        })}
      </main>
    </div>
  );
};

const CATEGORY_LIST = [
  {
    id: 1,
    category: '클렌저',
    description:
      '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.',
  },
  {
    id: 2,
    category: '각질 제거',
    description:
      '효과적인 각질 관리는 피부의 잔여물과 불필요한 유분을 깨끗하게 세정해주는 동시에 피부를 부드럽고 생기 있게 가꿔줍니다.',
  },
  {
    id: 3,
    category: '트리트먼트 & 마스크',
    description:
      '딥 클렌징 마스크에서 너리싱 페이셜 오일에 이르기까지 모든 스킨 케어 루틴을 보완하는 제품',
  },
  {
    id: 4,
    category: '토너',
    description:
      '토너는 클렌징과 수분 공급 사이에서 중요한 과정입니다. 피부의 밸런스를 잡아 주어 수분 공급 시 우수한 효과를 볼 수 있게 합니다.',
  },
  {
    id: 5,
    category: '하이드레이터',
    description:
      '피부에 보습, 영양을 주고 진정을 돕는 하이드레이터는 피부를 건강하게 가꿔주고 우수한 상태로 유지 시켜줍니다.',
  },
  {
    id: 6,
    category: '립&아이',
    description:
      '다른 피부보다도 얇고 연약한 입술과 눈가 주변은 섬세하고 민감하여 주기적인 수분 공급과 보호가 필요합니다.',
  },
  {
    id: 7,
    category: '쉐이빙',
    description:
      '이솝의 쉐이빙 도구와 제품은 차분하고 신선한 쉐이빙의 경험을 선사합니다',
  },
  {
    id: 8,
    category: '선 케어',
    description:
      '자외선에 노출되기 전에 효과적으로 피부를 보호하며 피부의 건강을 유지시켜줍니다.',
  },
  {
    id: 9,
    category: '키트',
    description: '다양한 피부 타입에 적합한 효과적인 셀렉션',
  },
  {
    id: 10,
    category: '스킨 케어 세트 추천',
    description:
      '함께 잘 어울리는 조합으로 구성되어 있어 간결하지만 탁월한 맞춤 케어를 제공합니다.',
  },
  {
    id: 11,
    category: '스킨 케어 기프트',
    description:
      '이솝 제품군에서 스킨 케어 제품은 개인용은 물론 사려 깊은 선물용으로 많은 사랑을 받고 있습니다.',
  },
];

export default ProductList;
