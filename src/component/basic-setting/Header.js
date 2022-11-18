import React, { useState } from 'react';
import Modal from './modal/Modal';
import Modal2 from './modal/Modal2';
import { Link } from 'react-router-dom';
import FilterNavbar from '../basic-setting/filter/FilterNavbar';
import styled from 'styled-components';

function Header() {
  const [modalOpen, setModalOpen] = useState(0);
  const [popupMenu, setPopupMenu] = useState(0);

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
  //로그인하면 헤더변경
  function openModal5() {
    setModalOpen(5);
  }
  function closeModal5() {
    setModalOpen(0);
    setPopupMenu(0);
  }
  const clickProfile = () => {
    if (popupMenu === 0) {
      setPopupMenu(1);
    } else {
      setPopupMenu(0);
    }
  };
  const InnerLine = styled.div`
    content: '';
    display: block;
    margin: 9px 7px;
    height: 1px;
    background-color: #ececec;
  `;
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
            {/* 가입하면 변경되는 부분 */}
            {modalOpen === 5 ? (
              <>
                <div id="loginheader">
                  <button
                    className="SearchButton loginSearch"
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
                  <div className="loginNotiButon">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      xmlnsXlink="https://www.w3.org/1999/xlink"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <defs>
                        <path
                          id="bpnpn3yn0a"
                          d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                        ></path>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                          <mask id="1dencd96ob" fill="#fff">
                            <use xlinkHref="#bpnpn3yn0a"></use>
                          </mask>
                          <use
                            fillRule="nonzero"
                            stroke="currentColor"
                            strokeWidth=".3"
                            xlinkHref="#bpnpn3yn0a"
                          ></use>
                          <g fill="currentColor" mask="url(#1dencd96ob)">
                            <path d="M0 0H18V18H0z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="profileButtonBox set_center">
                    <button className="profileButton" onClick={clickProfile}>
                      <img src="https://static.wanted.co.kr/oneid-user/profile_default.png"></img>
                    </button>
                    {popupMenu === 1 ? (
                      <div className="menuPopOverWrapper">
                        <div className="menuPopOverList">
                          <li>
                            <a>My 원티드</a>
                          </li>
                          <li>
                            <a>프로필</a>
                          </li>
                          <InnerLine />
                          <li>
                            <a>지원 현황</a>
                          </li>
                          <li>
                            <a>제안받기 현황</a>
                          </li>
                          <li>
                            <a>좋아요</a>
                          </li>
                          <li>
                            <a>북마크</a>
                          </li>
                          <InnerLine />
                          <li>
                            <a>추천</a>
                          </li>
                          <li>
                            <a>포인트</a>
                          </li>
                          <li onClick={closeModal5} id="logout">
                            <button className="logoutButton">로그아웃</button>
                          </li>
                        </div>
                        <div className="cornerWrapper">
                          <div className="corner"></div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </>
            ) : (
              <div id="setPlace">
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
              </div>
            )}
            <div className="draw_small_line"></div>
            <div className="ServiceButton">기업서비스</div>
          </div>
        </nav>
        <Modal
          modalOpen={modalOpen}
          modalClose={closeModal}
          openModal2={openModal2}
        ></Modal>
        <Modal2
          modalOpen={modalOpen}
          modalClose={closeModal2}
          openModal5={openModal5}
        ></Modal2>
      </div>
      <FilterNavbar
        modalOpen={modalOpen}
        modalClose={closeModal3}
      ></FilterNavbar>
    </>
  );
}

export default Header;
