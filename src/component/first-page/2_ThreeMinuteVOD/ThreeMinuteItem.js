import Items from '../../../json/ThreeMinute.json';

function ThreeMinuteItem() {
  return (
    <>
      {Items.ThreeMinuteItems.map((item) => (
        <li key={item.id}>
          <a>
            <img src={item.imgsrc} alt={item.imgalt} loading="lazy" />
            <div>
              <p className="article_card_title">{item.title}</p>
              <p className="article_card_category">{item.hashtag}</p>
            </div>
          </a>
        </li>
      ))}
    </>
  );
}
export default ThreeMinuteItem;
