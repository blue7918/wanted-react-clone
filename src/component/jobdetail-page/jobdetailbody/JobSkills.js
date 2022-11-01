import Items from '../../../json/JobDetail/JobSkillList.json'

function JobSKills(){
  return(
    <div class="jobContentDescriptionSkillsWrapper">
      {Items.JobSKillItems.map((item) => (
        <div class="jobContentSkillItem" key={item.id}>{item.skill}</div>
      ))}
    </div>
  );
}
export default JobSKills;