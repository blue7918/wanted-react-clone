import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

function JobDescription(){
  const { detailpage } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setItems(JobDetailZip.Zip.filter((a) => a.ID == detailpage));
  }, []);

  return(
    <>
      {Items[0] &&
        Items[0].DescriptionItems.map((item) => (
      <div key={item.id}>
        <section className="jobContentDescription">
          {item.text}
        </section>
      </div>
    ))}
    </>
    
  );
}
export default JobDescription;