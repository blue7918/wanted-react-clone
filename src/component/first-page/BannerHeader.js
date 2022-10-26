function BannerHeader(props) {
  return (
    <div className="banner_header">
      <div className="remove_background">
        <button className="arrow_btnl set_center">
          <span className="SvgIconRoot">
            <svg className="arrow_btnl_SvgIcon_root " viewBox="0 0 18 18">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="set_text_middle">
        <h2 className="set_fontsize_22">{props.title}</h2>
        <a
          className="watch_all_ar"
          data-attribute-id="home__seeMore"
          data-domain="article"
          data-click-section="button"
          href="/events?sort=deadline&amp;label=article&amp;payable=all"
        >
          {props.subtitle}
          <span className="watch_all_ar_svg">
            <svg className="root__svg__DKYBi" viewBox="0 0 19 19">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </a>
      </div>
      <div className="remove_background">
        <button type="button" className="arrow_btnr set_center">
          <span className="SvgIconRoot">
            <svg className="root__svg__DKYBi" viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
export default BannerHeader;
