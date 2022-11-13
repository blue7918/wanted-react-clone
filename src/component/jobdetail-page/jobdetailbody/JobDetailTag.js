import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

function JobDetailTag() {
  const { detailpage } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setItems(JobDetailZip.Zip.filter((a) => a.ID == detailpage));
  }, []);

  return (
    <div className="jobDetailTagList">
      <ul>
        {Items[0] &&
        Items[0].TagItems.map((item) => (
          <li key={item.id}>
            <a href={item.tagLink}>{item.tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default JobDetailTag;
