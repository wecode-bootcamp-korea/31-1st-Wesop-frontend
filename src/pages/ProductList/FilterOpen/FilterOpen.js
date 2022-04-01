import React from 'react';
import FilterColumn from './FilterColumn/FilterColumn';
import './FilterOpen.scss';

const FilterOpen = () => {
  return (
    <div className="filterOpen">
      <div className="filterColumns">
        {FILTER_COLUMN_LIST.map(column => {
          return <FilterColumn key={column.id} {...column} />;
        })}
      </div>
    </div>
  );
};

export default FilterOpen;

const FILTER_COLUMN_LIST = [
  {
    id: 1,
    columnName: '성분',
    all: '모든 성분',
    list: [
      '토코페롤',
      '지방산',
      '판테놀',
      '알로에 베라잎 추출물',
      '위치하젤',
      '파슬리 씨드',
      '비타민 C',
      '항산화제',
      '나이아신아마이드(비타민 B)',
      '스쿠알란',
      '락틱 애씨드',
      '살리실릭 애씨드',
      '티 트리 리프',
      '화학적 UV 필터',
      '산화아연 (UV필터)',
    ],
  },
  {
    id: 2,
    columnName: '아로마',
    all: '모든 향',
    list: ['프레쉬', '시트러스'],
  },
  {
    id: 3,
    columnName: '피부타입',
    all: '모든 타입',
    list: ['중성', '건성', '복합성', '지성'],
  },
  {
    id: 4,
    columnName: '피부 고민',
    all: '모든 관심사',
    list: ['노화', '수분 부족', '민감성 피부', '햇빛 노출', '트러블성 피부'],
  },
  {
    id: 5,
    columnName: '제형 타입',
    all: '모든 제형',
    list: [
      '로션',
      '미스트',
      '밀크',
      '밤',
      '세럼',
      '액세서리',
      '액체',
      '오일',
      '젤',
      '크림',
      '클레이',
      '파우더',
    ],
  },
];
