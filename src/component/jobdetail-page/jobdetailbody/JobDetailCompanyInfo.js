import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

function JobDetailCompanyInfo() {
  const { detailpage } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setItems(JobDetailZip.Zip.filter((a) => a.ID == detailpage));
  }, []);

  // const accordionWrapper = styled.div`
  //   margin-top: 10px;
  //   border-radius: 5px;
  //   background-color: #f3f5f8;
  //   /* padding: 25px 30px; */
  // `;
  let Strong = styled.span`
  font-weight: 800;
  color: #666;
  `;
  return (
    <>
      {Items[0] &&
        Items[0].CompanyInfoItems.map((item) => (
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
            <>
              <div class="accordionWrapper accordion accordion-flush  ">
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      viewBox="0 0 12 12"
                    >
                      <svg
                        className=""
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
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
                          본 채용정보는 원티드랩의 동의없이 무단전재, 재배포,
                          재가공할 수 없으며, 구직활동 이외의&nbsp;
                          <br />
                          용도로 사용할 수 없습니다.
                        </h5>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body accordionBody">
                      <p className="jobWarningBody">
                        본 채용 정보는&nbsp;<Strong>{item.name}</Strong>에서 제공한
                        자료를 바탕으로 원티드랩에서 표현을 수정하고 이의 배열
                        및 구성을 편집하여 완성한 원티드랩의 저작자산이자
                        영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는
                        전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포,
                        재가공 및 크롤링할 수 없으며, 게재된 채용기업의 정보는
                        구직자의 구직활동 이외의 용도로 사용될 수 없습니다.
                        원티드랩은 <Strong>{item.name}</Strong>에서 게재한 자료에
                        대한 오류나 그 밖에 원티드랩이 가공하지 않은 정보의
                        내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가
                        이를 신뢰하여 취한 조치에 대해 책임을 지지
                        않습니다.&nbsp;
                        <strong>
                          &lt;저작권자 (주)원티드랩. 무단전재-재배포금지&gt;
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
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
                  본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할
                  수 없으며, 구직활동 이외의&nbsp;
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
