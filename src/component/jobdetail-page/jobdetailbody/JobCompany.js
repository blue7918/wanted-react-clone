import Items from '../../../json/JobDetail/JobDetailCompany.json';

function JobCompany() {
  return (
    <>
      {Items.JobDetailCompany.map((item) => (
        <div className="jobDetailCompany " key={item.id}>
          <div>
            <h6>{item.company}</h6>
          </div>
          <button className="respondLevelBox ">
            <div
              className="respondLevel "
              style={{
                border: `1px solid ${item.color}`,
                color: `${item.color}`,
              }}
            >
              <span>{item.level}</span>
            </div>
            <div className="respondLevelPopup">{item.levelPopUp}</div>
          </button>
          <div className="jobDetailCompanySmallLine"></div>
          <span className="jobDetailCompanyLocation">
            {item.location1}
            <span className="jobDetailHeaderDot">.</span>
            {item.location2}
          </span>
        </div>
      ))}
    </>
  );
}
export default JobCompany;
