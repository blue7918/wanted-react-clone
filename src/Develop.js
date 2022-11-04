import React, { useState, useEffect } from 'react';
import './css/react-reset.css';
import './css/react-header.css';
import './css/react-footer.css';
import './css/react-develop-navbar.css';
import './css/react-develop-more.css';
import Header from './component/basic-setting/Header';

import MoreBanner from './component/develop-page/MoreBanner';
import CategoryNav from './component/develop-page/1.CategoryNav/CategoryNav';
import PopUpFilter from './component/develop-page/2.PopUpFilterWrapper/PopUpFilter';
import JobListBookMarkContainer from './component/develop-page/3.JobListBookmark/JobListBookMarkContainer';
import JobListContainer from './component/develop-page/4.JobListContainer/JobListContainer';

function Develop() {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    setScrollY(window.pageYOffset);
    console.log(ScrollY);
    if (ScrollY > 249) {
      // setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <>
      <Header />
      <CategoryNav />
      <div className={ScrollActive ? 'fixedBox' : 'filterListFixWrapper'}>
        <PopUpFilter />
      </div>

      <section className="jobListWrapper set_mwidth">
        <JobListBookMarkContainer />
      </section>
      <section className="jobAssociated set_mwidth">
        <JobListContainer />
      </section>

      <MoreBanner />
    </>
  );
}
export default Develop;
