import React, { useState } from 'react';
import Modal from './modal/Modal';
import Modal2 from './modal/Modal2';
import { Link } from 'react-router-dom';
import FilterNavbar from '../basic-setting/filter/FilterNavbar';

function Header() {
  const [modalOpen, setModalOpen] = useState(0);
  function openModal() {
    setModalOpen(1);
  }
  function closeModal() {
    setModalOpen(0);
  }

  function openModal2() {
    setModalOpen(2);
  }
  function closeModal2() {
    setModalOpen(0);
  }

  function openModal3() {
    setModalOpen(3);
  }
  function closeModal3() {
    setModalOpen(0);
  }

  return (
    <>
      <div className="NavBar">
        <nav className="navbar">
          <div className="navbar__menu">
            <div className="mainCategoryListPopUp set_center">
              <button type="button" className="hamberger__button">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75" />
              </button>

              <ul className="mainCategoryList">
                <li>
                  <em>직군 전체</em>
                </li>
                <Link to="/develop">
                  <li>
                    <em>개발</em>
                  </li>
                </Link>
                <li>
                  <em>경영·비즈니스</em>
                </li>
                <li>
                  <em>마케팅·광고</em>
                </li>
                <li>
                  <em>디자인</em>
                </li>
                <li>
                  <em>영업</em>
                </li>
                <li>
                  <em>고객서비스·리테일</em>
                </li>
                <li>
                  <em>게임 제작</em>
                </li>
                <li>
                  <em>HR</em>
                </li>
                <li>
                  <em>미디어</em>
                </li>
                <li>
                  <em>엔지니어링·설계</em>
                </li>
                <li>
                  <em>금융</em>
                </li>
                <li>
                  <em>제조·생상</em>
                </li>
                <li>
                  <em>물류·무역</em>
                </li>
                <li>
                  <em>의료·제약·바이오</em>
                </li>
                <li>
                  <em>교육</em>
                </li>
                <li>
                  <em>식·음료</em>
                </li>
                <li>
                  <em>법률·법집행기관</em>
                </li>
                <li>
                  <em>건설·시설</em>
                </li>
                <li>
                  <em>공공·복지</em>
                </li>
              </ul>
            </div>
            <Link to="/" className="set_center">
              <div className="main__logo">Wanted</div>
            </Link>
          </div>

          <ul className="navbar__list">
            <li>
              <Link to="/jobdetail">
                <div>채용</div>
              </Link>
            </li>
            <li>
              <div>이벤트</div>
            </li>
            <li>
              <div>직군별 연봉</div>
            </li>
            <li>
              <div>이력서</div>
            </li>
            <li>
              <div>커뮤니티</div>
            </li>
            <li>
              <div>프리랜서</div>
            </li>
            <li>
              <div>AI합격예측</div>
            </li>
          </ul>

          <div className="navbar_right">
            <div className="setPlace">
              <button
                className="SearchButton"
                type="button"
                data-attribute-id="gnb"
                data-gnb-kind="search"
                onClick={openModal3}
              >
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="qt2dnsql4a"
                      d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use
                      fill="#333"
                      fillRule="nonzero"
                      stroke="#333"
                      strokeWidth=".3"
                      xlinkHref="#qt2dnsql4a"
                    ></use>
                  </g>
                </svg>
              </button>
              <button id="signup_button" onClick={openModal}>
                회원가입/로그인
              </button>
              {/* <button id="signup_button" onClick={signin}>
                회원가입/로그인
              </button> */}
            </div>
            <div className="draw_small_line"></div>
            <div className="ServiceButton">기업서비스</div>
          </div>
        </nav>
        <Modal
          modalOpen={modalOpen}
          modalClose={closeModal}
          openModal2={openModal2}
        ></Modal>
        <Modal2 modalOpen={modalOpen} modalClose={closeModal2}></Modal2>
      </div>
      <FilterNavbar
        modalOpen={modalOpen}
        modalClose={closeModal3}
      ></FilterNavbar>
    </>
  );
}

export default Header;
