import Header from './component/basic-setting/Header';
import Footer from './component/basic-setting/Footer';
import './css/react-jobdetail-content.css';
import './css/react-jobdetail-list.css';
import JobDetailBody from './component/jobdetail-page/jobdetailbody/JobDetailBody';
import JobDetailList from './component/jobdetail-page/jobdetaillist/JobDetailList';

function JobDetail() {
  return (
    <>
      <Header />
      <JobDetailBody />
      <div class="jobAssociated set_mwidth">
        <h5 class="jobAssociatedTitle">이 포지션을 찾고 계셨나요?</h5>
        <JobDetailList />
      </div>
      <Footer/>
    </>
  );
}
export default JobDetail;
