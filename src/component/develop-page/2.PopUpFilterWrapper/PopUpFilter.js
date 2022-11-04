import React from 'react';
import TagFilter from './TagFilter';

function PopUpFilter() {
  return (
    <section className="filterListWrapper set_mwidth">
      <div className="filterListButtonContainer">
        <div className="filterListButtonBox">
          {/* 지역 */}
          <button type="button" className="filterButtonSet">
            <span className="filterButtonFirst">
              지역
              <span className="filterdCount">1</span>
            </span>
            <span className="filterButtonSecond">한국</span>
          </button>
          {/* <!-- 경력 --> */}
          <div className="filterListInnerSpace">
            <button type="button" className="filterButtonSet">
              <span className="filterButtonFirst">경력</span>
              <span className="filterButtonSecond">전체</span>
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- 기술스택 --> */}
          <div className="filterListInnerSpace">
            <button type="button" className="filterButtonSet">
              <span className="filterButtonFirst">기술스택</span>
              <span className="filterButtonSecond"></span>
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- 어떤 순서로 검색할지 filter --> */}
        <div className="filterListCustomButton">
          <button className="" type="button">
            응답률순
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                fill="#333333"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <TagFilter />
    </section>
  );
}
export default PopUpFilter;
