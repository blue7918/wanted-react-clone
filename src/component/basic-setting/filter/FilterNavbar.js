import React from 'react';

function FilterNavbar(props) {
  const open = props.modalOpen;
  //const close = props.modalClose;

  const tagArray = [
    { id: 0, text: '#어린이집' },
    { id: 1, text: '#연봉상위 2~5%' },
    { id: 2, text: '#연말보너스' },
    { id: 3, text: '#퇴사율5%이하' },
    { id: 4, text: '#IoT' },
    { id: 5, text: '#헬스장' },
    { id: 6, text: '#수평적조직' },
    { id: 7, text: '#보육시설' },
    { id: 8, text: '#복지포인트' },
    { id: 9, text: '#주35시간' },
    { id: 10, text: '#인원급성장' },
    { id: 11, text: '#결혼기념일' },
    { id: 12, text: '#단체보험' },
    { id: 13, text: '#퇴사율 6~10%' },
    { id: 14, text: '#연봉상위11~20%' },
    { id: 15, text: '#노트북' },
    { id: 16, text: '#원격근무' },
    { id: 17, text: '#조식제공' },
    { id: 18, text: '#운동비' },
    { id: 19, text: '#육아휴직' },
    { id: 20, text: '#음료' },
    { id: 21, text: '#야근없음' },
    { id: 22, text: '#성과급' },
    { id: 23, text: '#차량지원' },
    { id: 24, text: '#스톡옵션' },
    { id: 25, text: '#연봉업계평균이상' },
    { id: 26, text: '#사택' },
    { id: 27, text: '#반려동물' },
  ];
  const candidate = Array(28)
    .fill()
    .map((v, i) => i);
  const shuffle = [];
  // 1~28를 랜덤하게 섞기
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }

  //const randomArray = shuffle.splice(0, 5);
  return (
    <div className={open === 3 ? 'openModal' : ''}>
      {open === 3 ? (
        <div className="searchBarWrapper">
          <div className="searchBarContainer">
            <form>
              <button className="searchBarSearchButton" type="button">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="qt2dnsql4a"
                      d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use
                      fill="#333"
                      fillRule="nonzero"
                      stroke="#333"
                      strokeWidth=".3"
                      xlinkHref="#qt2dnsql4a"
                    ></use>
                  </g>
                </svg>
              </button>
              <input placeholder="#태그, 회사, 포지션 검색"></input>
            </form>
            <div className="recentSearchTagContainer">
              <div className="recentSearchTagTitleBox">
                <h4 className="recentSearchTagTitle">
                  추천태그로 검색해보세요
                </h4>
                <div className="recentSearchGo">
                  기업태그 홈 이동하기
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      fill="currentColor"
                      d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                    ></path>
                  </svg>
                </div>
              </div>
              <ul className="recentSearchTagBox">
                <li key={parseInt(shuffle[0])}>
                  <button className="searchTag1">
                    {tagArray[parseInt(shuffle[0])].text}
                  </button>
                </li>
                <li key={parseInt(shuffle[1])}>
                  <button className="searchTag2">
                    {tagArray[parseInt(shuffle[1])].text}
                  </button>
                </li>
                <li key={parseInt(shuffle[2])}>
                  <button className="searchTag3">
                    {tagArray[parseInt(shuffle[2])].text}
                  </button>
                </li>
                <li key={parseInt(shuffle[3])}>
                  <button className="searchTag4">
                    {tagArray[parseInt(shuffle[3])].text}
                  </button>
                </li>
                <li key={parseInt(shuffle[4])}>
                  <button className="searchTag5">
                    {tagArray[parseInt(shuffle[4])].text}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default FilterNavbar;
