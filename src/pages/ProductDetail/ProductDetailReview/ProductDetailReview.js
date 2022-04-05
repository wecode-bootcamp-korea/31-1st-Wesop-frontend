import React, { useState } from 'react';
import './ProductDetailReview.scss';

function ProductDetailReview() {
  const [state, setState] = useState({
    author: '',
    content: '',
    satisfaction: 1,
  });

  const handleChangeState = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('저장성공');
  };
  return (
    <div className="reviewContainer">
      <h2 className="reviewTitle">리뷰</h2>
      <div>
        <input
          className="author"
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          className="content"
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <span>만족도 : </span>
      <select
        className="satisfaction"
        name="satisfaction"
        value={state.satisfaction}
        onChange={handleChangeState}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <div>
        <button className="save" onClick={handleSubmit}>
          저장하기
        </button>
      </div>
    </div>
  );
}
export default ProductDetailReview;
