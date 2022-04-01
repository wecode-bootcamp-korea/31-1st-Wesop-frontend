import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryList = () => {
  let params = useParams();
  return <div className="categoryList"> hello {params.category}</div>;
};

export default CategoryList;
