import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/react-main-style.css';
import './css/react-header.css';
import './css/react-reset.css';
import './css/react-footer.css';
import './css/react-search.css';
import Header from './component/basic-setting/Header';
import SlidePicture from './component/first-page/SlidePicture';
import CareerContentList from './component/first-page/1_CareerContentList/CareerContentList';
import ThreeMinuteVOD from './component/first-page/2_ThreeMinuteVOD/ThreeMinuteVOD';
import ForWorkerVOD from './component/first-page/3_ForWorkerVOD/ForWorkerVOD';
import LineBannerAdv from './component/first-page/LineBannerAdv';
import CareerEvent from './component/first-page/CareerEvent';
import ReasonToSubscribe from './component/first-page/ReasonToSubscribe';
import LookingForRecruit from './component/first-page/LookingForRecruit';
import Footer from './component/basic-setting/Footer';
import { FaRProject } from 'react-icons/fa';
import MainPage from './Main';
import DevelopPage from './Develop';
import JobDetailPage from './JobDetail';
import SearchPage from './component/search-page/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/develop" element={<DevelopPage />} />
        <Route path="/jobdetail" element={<JobDetailPage />} />
        <Route path="/develop/:detailpage" element={<JobDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:searchedCompany" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
