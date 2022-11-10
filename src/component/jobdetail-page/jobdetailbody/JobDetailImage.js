import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

function JobDetailImage() {
  const { detailpage } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setItems(JobDetailZip.Zip.filter((a) => a.ID == detailpage));
  }, []);

  // useEffect(() => {
  //   console.log(Items);
  // }, [Items]);

  // console.log(
  //   JobDetailZip.Zip.map((a) =>
  //     a.JobDetailImageItem.filter((e) => e.id == detailpage)
  //   )
  // );
  console.log('Items: ' + Items);
  return (
    <div className="jobDetailImage">
      {Items[0] &&
        Items[0].JobDetailImageItem.map((item) => (
          <img key={item.id} src={item.imgSrc} alt={item.imgAlt} />
        ))}


    </div>
  );
}
export default JobDetailImage;
