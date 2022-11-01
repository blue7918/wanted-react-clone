import JobCompany from './JobCompany';
import JobDetailTag from './JobDetailTag';
import Items from '../../../json/JobDetail/JobDetailCompany.json';
// import JobDescription from './JobDescription';
import JobSKills from './JobSkills';
import JobWorkPlace from './JobWorkPlace';
import JobDetailCompanyInfo from './JobDetailCompanyInfo';

function JobDetailHeader() {
  return (
    <section className="jobDetailHeader">
      {Items.JobDetailCompany.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
      <JobCompany />
      <JobDetailTag />
      <div className="jobContent">
        <section className="jobContentDescription">
          {/* <JobDescription /> */}
          <section class="jobContentDescription">
            <p>
              <span>
                비주얼신(구 피니뷰)은 세상의 모든 현실을 3D 디지털 트윈으로
                재창조하고 이를 이용한 다양한 기술을 활용한 서비스를 만들고
                있으며, 비주얼신과 함께 성장할 인재를 모집합니다.
                <br />
                <br />
                비주얼신은 2022년 08월 16일 첫 서비스로 "finiroom" App을 출시
                하였습니다.
                <br />
                finiroom은 모바일을 활용하여 3D 스캔, 편집, 스타일링, 모델
                공유등 활용도를 높여 가고 있으며,
                <br />
                해당 기술 기반으로 패션, 엔터테인먼트, 이커머스, 마케팅,
                인테리어, 제조업 분야등 에서 누구나 쉽게 사용할 수 있는
                3D서비스를 제공하기 위해 개발 진행 하고 있습니다. 또한 계속적인
                개발, 기획, 관리 인원에 대한 충원 계획을 갖고 있습니다.
                <br />
                <br />
                미래를 함께 하실 유능한 인재를 모집하기에 적극적인 관심과 지원
                바랍니다.
              </span>
            </p>
            <h6>주요업무</h6>
            <p>
              <span>
                • Android 앱 개발, 테스트 및 운영 <br />• 비즈니스 요구의 평가
                및 분석하여 적합한 솔루션 제안
                <br />• 기술적 잠재적 문제에 대한 예측 및 제안 수정
              </span>
            </p>
            <h6>자격요건</h6>
            <p>
              <span>
                • 5년 이상 안드로이드 개발 경력을 보유하신 분<br />• 프로젝트
                리딩 경험이 있는 분<br />• 서비스 개발 및 런칭 경험이 있는 분
              </span>
            </p>
            <h6>우대사항</h6>
            <p>
              <span>
                [우대사항]
                <br />• App 개발의 시작부터 배포까지 경험해본 자<br />• 컴퓨터
                공학 계열 전공자 선호
                <br />
                <br />
                [직위/연봉]
                <br />• 선임연구원~책임연구원
                <br />• 기존연봉고려 + @
              </span>
            </p>
            <h6>혜택 및 복지</h6>
            <p>
              <span>
                • 자유로운 연차 사용
                <br />• 휴게실, 회의실, 공기청정기, 스마트기기, 최신 노트북,
                사무용품 지급, 최고 성능 컴퓨터
                <br />• 복지몰운영 : 매월 &amp; 명절 복지포인트 지급
                <br />• 인재추천제도 : 포지션별로 인재를 추천 후 채용 시 1인당
                100만원 지급, <br /> 채용 된 인원이 1년 이상 근무 시 200만원
                지급
                <br />• 리프레쉬제도 : 몸과 마음에게 휴식을 ! 별도 연차 외
                안식주제공, <br /> 2년 이상 근무 시 일주일의 리프레쉬 휴가 제공{' '}
                <br />• 야근없는문화 : 정시 퇴근
                <br />• 탄력근무제 : 필요에 따라 탄력 근무제 가능
              </span>
            </p>
          </section>
          <h6>기술스택 ・ 툴</h6>
          <JobSKills />
        </section>
        <hr className="jobContentDivider" />
        <JobWorkPlace />
        <JobDetailCompanyInfo />
      </div>
    </section>
  );
}
export default JobDetailHeader;
