import CareerListItem from './CareerListItem';
import DrawLine from '../../basic-setting/DrawLine';

function CareerContentList() {
  return (
    <>
      <section className="CareerContentList">
        <div className="Section_Wrapper_9in1">
          <div className="insight_title">
            <h2 className="set_fontsize_22">나에게 필요한 커리어 인사이트 </h2>
            <button type="button" className="remove_background set_center">
              <svg width="24" height="24" className="" viewBox="0 0 17 17">
                <defs>
                  <filter id="bfoh3u0w3a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
                    ></feColorMatrix>
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g transform="translate(-1080 -374) translate(1080 374)">
                        <g>
                          <path
                            stroke="#999"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                            d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                            transform="translate(1 1)"
                          ></path>
                          <path
                            fill="#999"
                            d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                            transform="translate(1 1) rotate(-180 7.053 10.408)"
                          ></path>
                          <path
                            stroke="#999"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                            d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                            transform="translate(1 1)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="career_list">
            <button type="button" className="career_list_btn">
              <span>리더십</span>
            </button>
            <button type="button" className="career_list_btn">
              <span>커리어고민</span>
            </button>
            <button type="button" className="career_list_btn">
              <span>인간관계</span>
            </button>
            <button type="button" className="career_list_btn">
              <span>회사생활</span>
            </button>
            <button type="button" className="career_list_btn">
              <span>취업/이직</span>
            </button>
            <button type="button" className="career_list_btn">
              <span>조직문화</span>
            </button>
            <button type="button" className="career_list_btn">
              <span>라이프스타일</span>
            </button>
            <button type="button" className="career_list_btn">
              <span>디자인</span>
            </button>
            <button type="button" className="career_list_btna">
              <span>
                <svg className="SvgIcon_SvgIcon__root" viewBox="0 0 17 17">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </button>
            <button type="button" className="career_list_btnd">
              <svg width="16" height="3" viewBox="0 0 16 3">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="career_content_list">
            <CareerListItem />
          </ul>
          <div className="career_content_list_more">
            <button className="more_watching">더 많은 콘텐츠 보기</button>
          </div>
        </div>
      </section>
      <DrawLine/>
    </>
  );
}

export default CareerContentList;
