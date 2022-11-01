import React from 'react';
import './css/react-reset.css';
import './css/react-header.css';
import './css/react-footer.css';
import './css/react-develop-navbar.css';
import './css/react-develop-more.css';
import Header from './component/basic-setting/Header';

import MoreBanner from './component/develop-page/MoreBanner';
import CategoryNav from './component/develop-page/1.CategoryNav/CategoryNav'
import PopUpFilter from './component/develop-page/2.PopUpFilterWrapper/PopUpFilter'
import JobListBookMarkContainer from './component/develop-page/3.JobListBookmark/JobListBookMarkContainer'
import JobListContainer from './component/develop-page/4.JobListContainer/JobListContainer'


function Develop() {
  return (
    <>
      <Header />
      <CategoryNav/>
      <PopUpFilter/>
      <section className="jobListWrapper set_mwidth">
        <JobListBookMarkContainer/>
        <JobListContainer/>
      </section>
      
      <MoreBanner />
    </>
  );
}
export default Develop;
