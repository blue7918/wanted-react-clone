import React, { useEffect, useState } from 'react'


// const User = {
//   pw: 'test2323@@@'
// }
function Modal2(props) {
  const open = props.modalOpen;
  const close = props.modalClose;

  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [pwValid, setPwValid] = useState(false);
  const [pwValid2, setPwValid2] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) { 
      setPwValid(true);
      return;
    } else {
      setPwValid(false);
    }
    console.log('1'+pwValid);
  }; console.log(setPw)

  const handlePw2 = (e) => {
    setConfirmPw(e.target.value);
    if((pw === e.target.value)){
      setPwValid2(true);
    }else{
      setPwValid2(false);
    }
    console.log('2'+pwValid2);
  }
  console.log('2'+pwValid2);
  // const onClickConfirmButton = () => {
  //   if( pw === User.pw) {
  //     return true;
  //   } else {
  //   }
  // }

  const [Selected, setSelected] = useState('');
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const data = [
    { id: 0, title: '만 14세 이상입니다. (필수)', text: '' },
    { id: 1, title: 'oneID 이용약관 동의 (필수)', text: '자세히' },
    { id: 2, title: '개인정보 및 수집 이용 동의 (필수)', text: '자세히' },
  ];

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };
  console.log('aaa:  '+checkItems.length);
  
  useEffect(() => {
    if(pwValid===true&& pwValid2===true && checkItems.length===3) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [pwValid,pwValid2,checkItems]);

  console.log('allow: '+notAllow);
  return (
    <div className={open === 2 ? ' openModal' : ''}>
      {open === 2 ? (
        <>
          <div id="signinmal_second" className="signInMal2">
            <div className="signInMalHead">
              <div className="set_center">회원가입</div>
              <button id="signin_close_button2" onClick={close}>
                <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                  <path
                    fill="currentColor"
                    d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="signInMalBody2">
              <form id="signin_form">
                <p>이름</p>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요."
                  defaultValue=""
                />
                <p>휴대폰 번호</p>
                <div>
                  <div className="phoneNumberCountryContainer">
                    <select
                      className="phoneNumberCountry"
                      onChange={handleSelect}
                      value={Selected}
                    >
                      <option value="KR">South Korea +82</option>
                      <option value="JP">Japan +81</option>
                      <option value="TW">Taiwan +886</option>
                      <option value="HK">Hong Kong +852</option>
                      <option value="SG">Singapore +65</option>
                      <option value="AF">Afghanistan +93</option>
                      <option value="AL">Albania +355</option>
                      <option value="DZ">Algeria +213</option>
                      <option value="AO">Angola +244</option>
                      <option value="AR">Argentina +54</option>
                      <option value="AM">Armenia +374</option>
                      <option value="AW">Aruba +297</option>
                      <option value="AU">Australia +61</option>
                      <option value="AT">Austria +43</option>
                      <option value="AZ">Azerbaijan +994</option>
                      <option value="BH">Bahrain +973</option>
                      <option value="BD">Bangladesh +880</option>
                      <option value="BY">Belarus +375</option>
                      <option value="BE">Belgium +32</option>
                      <option value="BZ">Belize +501</option>
                      <option value="BJ">Benin +229</option>
                      <option value="BT">Bhutan +975</option>
                      <option value="BO">Bolivia +591</option>
                      <option value="BW">Botswana +267</option>
                      <option value="BR">Brazil +55</option>
                      <option value="BN">Brunei +673</option>
                      <option value="BG">Bulgaria +359</option>
                      <option value="BF">Burkina Faso +226</option>
                      <option value="KH">Cambodia +855</option>
                      <option value="CM">Cameroon +237</option>
                      <option value="CA">Canada +1</option>
                      <option value="CL">Chile +56</option>
                      <option value="CN">China +86</option>
                      <option value="CX">Christmas Island +61</option>
                      <option value="CC">Cocos Islands +61</option>
                      <option value="CO">Colombia +57</option>
                      <option value="KM">Comoros +269</option>
                      <option value="CR">Costa Rica +506</option>
                      <option value="HR">Croatia +385</option>
                      <option value="CU">Cuba +53</option>
                      <option value="CW">Curacao +599</option>
                      <option value="CY">Cyprus +357</option>
                      <option value="CZ">Czech Republic +420</option>
                      <option value="DK">Denmark +45</option>
                      <option value="DJ">Djibouti +253</option>
                      <option value="EC">Ecuador +593</option>
                      <option value="EG">Egypt +20</option>
                      <option value="SV">El Salvador +503</option>
                      <option value="GQ">Equatorial Guinea +240</option>
                      <option value="EE">Estonia +372</option>
                      <option value="ET">Ethiopia +251</option>
                      <option value="FO">Faroe Islands +298</option>
                      <option value="FJ">Fiji +679</option>
                      <option value="FI">Finland +358</option>
                      <option value="FR">France +33</option>
                      <option value="PF">French Polynesia +689</option>
                      <option value="GM">Gambia +220</option>
                      <option value="GE">Georgia +995</option>
                      <option value="DE">Germany +49</option>
                      <option value="GH">Ghana +233</option>
                      <option value="GR">Greece +30</option>
                      <option value="GL">Greenland +299</option>
                      <option value="GT">Guatemala +502</option>
                      <option value="GN">Guinea +224</option>
                      <option value="GY">Guyana +592</option>
                      <option value="HT">Haiti +509</option>
                      <option value="HN">Honduras +504</option>
                      <option value="HU">Hungary +36</option>
                      <option value="IS">Iceland +354</option>
                      <option value="IN">India +91</option>
                      <option value="ID">Indonesia +62</option>
                      <option value="IR">Iran +98</option>
                      <option value="IQ">Iraq +964</option>
                      <option value="IE">Ireland +353</option>
                      <option value="IL">Israel +972</option>
                      <option value="IT">Italy +39</option>
                      <option value="JO">Jordan +962</option>
                      <option value="KZ">Kazakhstan +7</option>
                      <option value="KE">Kenya +254</option>
                      <option value="XK">Kosovo +383</option>
                      <option value="KW">Kuwait +965</option>
                      <option value="KG">Kyrgyzstan +996</option>
                      <option value="LA">Laos +856</option>
                      <option value="LV">Latvia +371</option>
                      <option value="LB">Lebanon +961</option>
                      <option value="LY">Libya +218</option>
                      <option value="LI">Liechtenstein +423</option>
                      <option value="LT">Lithuania +370</option>
                      <option value="LU">Luxembourg +352</option>
                      <option value="MO">Macau +853</option>
                      <option value="MK">Macedonia +389</option>
                      <option value="MG">Madagascar +261</option>
                      <option value="MW">Malawi +265</option>
                      <option value="MY">Malaysia +60</option>
                      <option value="MV">Maldives +960</option>
                      <option value="ML">Mali +223</option>
                      <option value="MT">Malta +356</option>
                      <option value="MH">Marshall Islands +692</option>
                      <option value="SY">Syria +963</option>
                      <option value="TH">Thailand +66</option>
                    </select>
                    <span className="signInMalDownArrow">
                      <svg viewBox="0 0 10 6" className="SvgIconRoot">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z"
                          fill="var(--theme-palette-colors-gray-900)"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="phoneNumber" value="">
                    <input
                      type="text"
                      placeholder="(예시) 01013245768"
                      name="mobile"
                      className="phoneNumberExample"
                      defaultValue=""
                    />
                    <button className="phoneNumberButton">
                      <span>인증번호 받기</span>
                    </button>
                  </div>
                  <div className="phoneNumber">
                    <input
                      type="text"
                      placeholder="인증번호를 입력해주세요."
                      name="authCode"
                      readOnly=""
                      className="phoneNumberVerification"
                      defaultValue=""
                    />
                  </div>
                </div>
                <p>비밀번호</p>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  name="password"
                  onChange={handlePw}
                  defaultValue=""
                />
                <div className="errorMessageWrap">
                  {!pwValid && pw.length > 0 && (
                    <div>올바르지 않은 비밀번호입니다.</div>
                  )}
                </div>
                <input
                  type="password"
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                  name="passwordConfirm"
                  onChange={handlePw2}
                  defaultValue=""
                />
                <div className="errorMessageWrap">
                  { !(pw === confirmPw)&& confirmPw.length > 0 && (
                    <div>비밀번호가 서로 일치하지 않습니다.</div>
                  )}
                </div>
                <p className="passwordDetail">
                  영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
                  16자 이하로 입력해주세요.
                </p>
                <div className="checkBoxContainer">
                  <div className="checkBoxBox1">
                    <input
                      type="checkbox"
                      name="select-all"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                      checked={checkItems.length === data.length ? true : false}
                    />
                    <p className="checkBoxAllowAll">전체동의</p>
                  </div>
                  <hr
                    style={{
                      border: 'none',
                      borderBottom: '0.063rem solid #e1e2e3',
                    }}
                  />
                  {data?.map((data) => (
                    <div className="checkBoxBox2">
                      <div key={data.id} className="checkBoxBox2InnerBox">
                        <input
                          type="checkbox"
                          name={`select-${data.id}`}
                          onChange={(e) =>
                            handleSingleCheck(e.target.checked, data.id)
                          }
                          // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                          checked={checkItems.includes(data.id) ? true : false}
                        />
                        <p>{data.title}</p>
                      </div>
                      <p style={{ fontWeight: 600, color: '#888' }}>
                        {data.text}
                      </p>
                    </div>
                  ))}
                </div>
              </form>
            </div>
            <div className="set_center">
              <button id="signinmal_second_signin_button" 
              onClick={props.openModal5}
              disabled={notAllow}>
                <span>가입하기</span>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Modal2;
