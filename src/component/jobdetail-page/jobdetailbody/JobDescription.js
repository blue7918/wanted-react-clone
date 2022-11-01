import Items from '../../../json/JobDetail/JobDescriptionList.json'

function JobDescription(){
  return(
    <>
      {Items.DescriptionItems.map((item) => (
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