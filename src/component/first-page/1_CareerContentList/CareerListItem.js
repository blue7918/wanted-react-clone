import Items from '../../../json/CareerContentListItem.json';

function CareerListItem() {
  return (
    <>
      {Items.CareerItems.map((item) => (
        <li className="career_content_list_li" key={item.id}>
          <a>
            <div className="content_card_img">
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
              />
            </div>
            <p className="content_card_title">
              {item.title}
            </p>
            <p className="content_card_text">
              {item.text}
            </p>
            <div className="content_card_info">
              <img
                src={item.infoImg}
                alt={item.infoAlt}
              />
              <p>{item.infoWho}</p>
            </div>
          </a>
        </li>
      ))}
    </>
  );
}
export default CareerListItem;

