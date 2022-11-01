import JobDetailImage from './JobDetailImage';
import JobDetailHeader from './JobDetailHeader';
import JobDetailRewardBox from './JobDetailRewardBox';


function JobDetailBody() {
  return (
    <>
      <div className="jobDetailBody set_mwidth">
        <div className="jobDetailWrapper">
          <div>
            <JobDetailImage />
            <JobDetailHeader />
          </div>
        </div>
        <JobDetailRewardBox />
      </div>
      
    </>
  );
}
export default JobDetailBody;
