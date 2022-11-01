import BookMark from './BookMark'
import FeaturedCompanyList from './FeaturedCompanyList'

function JobListBookMarkContainer(){
  return(
    <div className="jobListBookmarkContainer">
      <div className="make38pxSpace"></div>
      <BookMark/>
      <h3 className="featuredCompanyTitle set_mwidth">적극 채용 중인 회사</h3>
      <ul className="featuredCompanyList">
        <FeaturedCompanyList/>
      </ul>
    </div>
  );
}
export default JobListBookMarkContainer;