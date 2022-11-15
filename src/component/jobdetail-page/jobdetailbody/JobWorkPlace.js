import JobWorkPlaceMap from './JobWorkPlaceMap';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

function JobWorkPlace() {
  const { detailpage } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setItems(JobDetailZip.Zip.filter((a) => a.ID == detailpage));
  }, []);

  return (
    <section className="jobWorkPlace">
      {Items[0] &&
        Items[0].WorkPlaceItems.map((item) => (
          <div key={item.id}>
            <div>
              <span className="jobWorkPlaceHeader">{item.deadline}</span>
              <span className="jobWorkPlaceBody">{item.deadlineText}</span>
            </div>
            <div>
              <span className="jobWorkPlaceHeader">{item.place}</span>
              <span className="jobWorkPlaceBody">{item.placeText}</span>
            </div>
            <JobWorkPlaceMap lat={item.lat} lng={item.lng}/>
          </div>
        ))}
    </section>
  );
}
export default JobWorkPlace;
