import React, { useEffect, useState } from 'react';


function Modal(props) {
  const open = props.modalOpen;
  const close = props.modalClose;
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  useEffect(() => {
    if(open === 0 ){
      setEmail('');
    }
  },[open])
  return (
    <div className={open === 1 ? ' openModal' : ''}>
      {open === 1 ? (
        <>
          <div id="signinmal_first" className="signInMal">
            <div className="signInMalHead">
              <img
                src="https://img.hankyung.com/photo/202112/01.26651490.1.jpg"
                alt=""
              />
              <button id="signin_close_button1" onClick={close}>
                <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                  <path
                    fill="currentColor"
                    d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="signInMalBody">
              <div className="signInMalBodyTextPanel">
                <h1>
                  직장인을 위한
                  <br />
                  커리어 플랫폼, 원티드!
                </h1>
                <h2>
                  커리어 성장과 행복을 위한 여정
                  <br /> 지금 원티드에서 시작하세요.
                </h2>
              </div>
              <div className="signInMalBodyInputPanel">
                <div className="InputPanelEmailBox">
                  <label htmlFor="email" className="InputPanelEmailLabel">
                    이메일
                  </label>
                  <input
                    type="text"
                    placeholder="이메일을 입력해 주세요."
                    id="email"
                    value={email}
                    onChange={handleEmail}
                  />
                  <div id="write_right_address">
                    {!emailValid && email.length > 0 && (
                      <div>올바른 이메일 주소를 입력해주세요.</div>
                    )}
                  </div>
                </div>
                <button
                  id="input_panel_button"
                  onClick={props.openModal2}
                  disabled={notAllow}
                >
                  <input type="submit" value="이메일로 계속하기" />
                </button>
                <div className="InputPanelOrSocial">or</div>
                <div className="InputPanelSocialLogin">
                  다음 계정으로 계속하기
                </div>
                <div className="InputPanelSocialButtonContainer">
                  <div className="SocialButtonBox">
                    <div className="InputPanelSocialKakao SocialButtons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                      >
                        <path
                          fill="#000"
                          fillRule="nonzero"
                          d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                        ></path>
                      </svg>
                    </div>
                    <div className="SocialButtonText">Kakao</div>
                  </div>
                  <div className="SocialButtonBox">
                    <div className="InputPanelSocialFacebook SocialButtons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="23"
                        viewBox="0 0 12 23"
                      >
                        <path
                          fill="#fff"
                          fillRule="nonzero"
                          d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
                        ></path>
                      </svg>
                    </div>
                    <div className="SocialButtonText">Facebook</div>
                  </div>
                  <div className="SocialButtonBox">
                    <div className="InputPanelSocialGoogle SocialButtons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                      >
                        <g fill="none" fillRule="nonzero">
                          <path
                            fill="#EA4335"
                            d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"
                          ></path>
                          <path d="M0 0L23 0 23 23 0 23z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="SocialButtonText">Google</div>
                  </div>
                  <div className="SocialButtonBox">
                    <div className="InputPanelSocialApple SocialButtons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                      >
                        <path
                          fill="#fff"
                          fillRule="nonzero"
                          d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"
                        ></path>
                      </svg>
                    </div>
                    <div className="SocialButtonText">Apple</div>
                  </div>
                </div>
                <p className="signInMalAgreement">
                  걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                  <br />
                  회원가입 시{' '}
                  <a
                    className="loginModalAnchor"
                    href="https://help.wanted.co.kr/hc/ko/articles/360035484292"
                    target="_blank"
                  >
                    개인정보 처리방침
                  </a>
                  과{' '}
                  <a
                    className="loginModalAnchor"
                    href="https://help.wanted.co.kr/hc/ko/articles/360035844551"
                    target="_blank"
                  >
                    이용약관
                  </a>
                  을 확인하였으며, 동의합니다.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Modal;
