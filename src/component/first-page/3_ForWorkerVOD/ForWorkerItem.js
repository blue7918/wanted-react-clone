import Items from '../../../json/ForWorkerListItem.json';

function ForWorkerItem() {
  return (
    <>
      {Items.WorkerListItem.map((item) => (
        <li key={item.id}>
          <a>
            <div className="set_place">
              <img src={item.imgSrc} alt={item.imgAlt} loading="lazy" />
              <div className="wanted_plus_playtime">
                <span>{item.playTime}</span>
              </div>
            </div>
            <div className="wanted_plus_text">
              <p className="wanted_plus_who">{item.who}</p>
              <p className="wanted_plus_vtitle">{item.vtitle}</p>
              <p className="wanted_plus_etitle">{item.etitle}</p>
            </div>
          </a>
        </li>
      ))}
    </>
  );
}
export default ForWorkerItem;
