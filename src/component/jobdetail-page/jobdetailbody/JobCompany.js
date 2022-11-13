import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

function JobCompany() {
  const { detailpage } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setItems(JobDetailZip.Zip.filter((a) => a.ID == detailpage));
  }, []);

  return (
    <>
      {Items[0] &&
        Items[0].JobDetailCompany.map((item) => (
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
