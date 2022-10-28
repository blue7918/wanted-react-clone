import BannerHeader from '../BannerHeader';
import ForWorkerItem from './ForWorkerItem'

function ForWorkerVOD() {
  return (
    <section className="make_space">
      <section className="Section_Wrapper_9in1">
        <BannerHeader
          title="직장인을 위한 Wanted+ VOD"
          subtitle="VOD 전체보기"
        ></BannerHeader>
        <ul className="article_list">
          <ForWorkerItem/>
        </ul>
      </section>
    </section>
  );
}
export default ForWorkerVOD;
