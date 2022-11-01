import Items from '../../../json/JobDetail/JobDetailTagItems.json';

function JobDetailTag() {
  return (
    <div className="jobDetailTagList">
      <ul>
        {Items.TagItems.map((item) => (
          <li key={item.id}>
            <a href={item.tagLink}>{item.tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default JobDetailTag;
