import Items from '../../../json/JobDetail/CompanyInfoList.json';

function JobDetailCompanyInfo() {
  return (
    <>
      {Items.CompanyInfoItems.map((item) => (
        <div key={item.id}>
          <section className="jobCompanyInfo">
            <button className="jobCompanyLeft">
              <div
                className="jobCompanyLogo"
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                }}
              ></div>
              <div className="jobCompanyName">
                <h5>{item.name}</h5>
                <h6>{item.content}</h6>
              </div>
            </button>
            <button className="jobCompanyFollowButton">
              <span>팔로우</span>
            </button>
          </section>
          <div className="jobWarning">
            <svg className="" width="24" height="24" viewBox="0 0 24 24">
              <g fill="currentColor" fillRule="evenodd">
                <path
                  fillRule="nonzero"
                  d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
                ></path>
                <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                <path
                  fillRule="nonzero"
                  d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
                ></path>
              </g>
            </svg>
            <div className="jobWarningContent">
              <h5>
                본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
                없으며, 구직활동 이외의&nbsp;
                <br />
                용도로 사용할 수 없습니다.
              </h5>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    fill="#767676"
                    fillRule="nonzero"
                    d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default JobDetailCompanyInfo;
