function MoreBanner(){
  return (
    //  밑의 계속 뜨는 '더 알아보기' 부분 
    <button className="seeMoreWrapper">
      <div className="seeMoreContainer">
        <div>
          <span className="seeMoreText">이제 밤새워 채용 공고 보지마세요.</span>
        </div>
        <div className="seeMoreButton">
          <span>더 알아보기</span>
        </div>
      </div>
    </button>
  );
}
export default MoreBanner;