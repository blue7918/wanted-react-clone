import JobWorkPlaceMap from './JobWorkPlaceMap';
import Items from '../../../json/JobDetail/WorkPlaceList.json';

function JobWorkPlace() {
  return (
    <section className="jobWorkPlace">
      {Items.WorkPlaceItems.map((item) => (
        <div key={item.id}>
          <div>
            <span className="jobWorkPlaceHeader">{item.deadline}</span>
            <span className="jobWorkPlaceBody">{item.deadlineText}</span>
          </div>
          <div>
            <span className="jobWorkPlaceHeader">{item.place}</span>
            <span className="jobWorkPlaceBody">{item.placeText}</span>
          </div>
          <JobWorkPlaceMap />
        </div>
      ))}

      {/* <a
        className="jobWorkPlaceMap"
        // href="https://map.naver.com/?dlevel=13&amp;pinTitle=서울특별시 용산구 한강대로 366 트윈시티 남산&amp;lat=37.5511247&amp;lng=126.9729133"
        rel="noreferrer noopener"
        target="_blank"
      >
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7954092675777!2d126.97171639556697!3d37.55078417208345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca310a916e6cd%3A0xbfd57b2d3d737d38!2z7Yyo7Iqk7Yq47YyM7J2067iMIOyEnOyauOyXreygkA!5e0!3m2!1sko!2skr!4v1666097606890!5m2!1sko!2skr"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </a> */}
    </section>
  );
}
export default JobWorkPlace;
