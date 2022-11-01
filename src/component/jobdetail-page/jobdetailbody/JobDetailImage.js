import Items from '../../../json/JobDetail/JobDetailImageList.json';

function JobDetailImage() {
  return (
    <div className="jobDetailImage">
      {Items.JobDetailImageItem.map((item) => (
        <img key={item.id} src={item.imgSrc} alt={item.imgAlt} />
      ))}
    </div>
  );
}
export default JobDetailImage;
