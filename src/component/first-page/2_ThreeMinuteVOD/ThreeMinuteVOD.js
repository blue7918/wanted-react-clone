import BannerHeader from '../BannerHeader';
import DrawLine from '../../basic-setting/DrawLine';
import ThreeMinuteItem from './ThreeMinuteItem';

function ThreeMinuteVOD() {
  return (
    <>
      <section className="make_space">
        <section className="Section_Wrapper_9in1">
          <BannerHeader
            title="3분만에 읽는 Wanted+ 아티클"
            subtitle="아티클 전체보기"
          ></BannerHeader>
          <ul className="article_list">
            <ThreeMinuteItem />
          </ul>
        </section>
      </section>
      <DrawLine />
    </>
  );
}

export default ThreeMinuteVOD;
