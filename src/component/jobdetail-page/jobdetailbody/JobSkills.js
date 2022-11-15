import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

function JobSKills() {
  const { detailpage } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setItems(JobDetailZip.Zip.filter((a) => a.ID == detailpage));
  }, []);

  return (
    <div className="jobContentDescriptionSkillsWrapper">
      {Items[0] &&
        Items[0].JobSKillItems.map((item) => (
        <div className="jobContentSkillItem" key={item.id}>
          {item.skill}
        </div>
      ))}
    </div>
  );
}
export default JobSKills;
