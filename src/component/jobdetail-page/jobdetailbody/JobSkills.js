import Items from '../../../json/JobDetail/JobSkillList.json';

function JobSKills() {
  return (
    <div className="jobContentDescriptionSkillsWrapper">
      {Items.JobSKillItems.map((item) => (
        <div className="jobContentSkillItem" key={item.id}>
          {item.skill}
        </div>
      ))}
    </div>
  );
}
export default JobSKills;
