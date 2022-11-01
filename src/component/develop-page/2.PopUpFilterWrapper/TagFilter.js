import Items from '../../../json/TagList.json';

function TagFilter() {
  return (
    <section className="tagFilter">
      <div>
        <div className="tagList">
          <div className="tagListTrack" style={{ width: '2772px', opacity: 1 }}>
            {/* <!-- 2772px = 173.25rem --> */}
            {Items.TagListItem.map((item) => (
              <div
                key={item.id}
                dataIndex={item.id}
                className="tagListSlide"
                tabindex="-1"
                style={{ outLine: 'none' }}
              >
                <div>
                  <button
                    style={{ background: item.color }}
                    type="button"
                    className="tagListItem"
                  >
                    {item.text}
                    <img src={item.imgSrc} alt={item.imgAlt} />
                  </button>
                </div>
              </div>
            ))}
            <button type="button" className="navbarFilterListArrowR set_center">
              <span className="SvgIconRoot">
                <svg className="root__svg__DKYBi" viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TagFilter;
