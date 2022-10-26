import { FaSortDown } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="FooterNavlink">
      <div className="footer_navlink1">
        <div className="footer_navlink1_1">
          <div className="navlink_logo">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&amp;w=110&amp;q=100"
              alt="wanted"
            />
          </div>
          <div className="navlink_links">
            <a
              href="https://www.wantedlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-attribute-id="fnb"
              data-fnb-kind="investment"
            >
              기업소개
            </a>
            <a
              href="https://help.wanted.co.kr/hc/ko/articles/360035844551"
              target="_blank"
              rel="noopener noreferrer"
              data-attribute-id="fnb"
              data-fnb-kind="termsOfUse"
            >
              이용약관
            </a>
            <a
              href="https://www.wanted.co.kr/privacy"
              target="_blank"
              rel="noopener noreferrer"
              data-attribute-id="fnb"
              data-fnb-kind="privacyPolicy"
            >
              개인정보 처리방침
            </a>
            <a
              href="https://help.wanted.co.kr/hc/ko/"
              target="_blank"
              rel="noopener noreferrer"
              data-attribute-id="fnb"
              data-fnb-kind="FAQ"
            >
              고객센터
            </a>
          </div>
        </div>
        <div className="footer_navlink1_2">
          <a
            href="https://www.instagram.com/wantedjobs.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100"
              alt="instagram"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100"
              alt="youtube"
            />
          </a>
          <a
            href="https://www.facebook.com/wantedkr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100"
              alt="facebook"
            />
          </a>
          <a
            href="https://blog.naver.com/wantedlab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100"
              alt="blog"
            />
          </a>
          <a
            href="https://pf.kakao.com/_XqCIxl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100"
              alt="kakao"
            />
          </a>
          <a
            href="https://post.naver.com/my.nhn?memberNo=18284175"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100"
              alt="post"
            />
          </a>
          <a
            href="https://apps.apple.com/kr/app/id1074569961"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100"
              alt="apple"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100"
              alt="google"
            />
          </a>
        </div>
      </div>
      <div className="footer_navlink2">
        <p className="footer_navlink2_text">
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
          롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
          <br />
          유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외)
          서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118
          <br />© Wantedlab, Inc.
        </p>
        <div className="footer_local_select">
          <img
            className="countryIcon"
            src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
            alt="country flag KR"
          />
          <select id="select_btn">
            <option value="KR">한국 (한국어)</option>
            <option value="JP">日本 (日本語)</option>
            <option value="WW">Worldwide (English)</option>
            <option value="SG">Singapore (English)</option>
          </select>
          <FaSortDown className="footer_local_select_icon"/>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
