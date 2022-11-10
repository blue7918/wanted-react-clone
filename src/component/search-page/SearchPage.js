import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../css/react-search.css';
import '../../css/react-reset.css';
import Header from '../basic-setting/Header';
import Company from '../../json/Search/SearchedCompanyList.json';
import PopUpPart from '../develop-page/2.PopUpFilterWrapper/PopUpFilter';
import Items from '../../json/JobListItem.json';

function SearchPage() {
  const [SearchedItems, SetSearchedItems] = useState([]);
  const { searchedCompany } = useParams();
  const [FilteredCompany, SetFilteredCompany] = useState([]);

  useEffect(() => {
    SetSearchedItems(Items.JobItems.filter((a) => a.name == searchedCompany));
  }, []);
  useEffect(() => {
    SetFilteredCompany(
      Company.CompanyList.filter((b) => b.name.includes(searchedCompany))
    );
  }, []);
  console.log(FilteredCompany);

  return (
    <>
      <Header />
      <div className="paddingHeader" />
      <div className="searchInput">
        <div className="searchInputTag">{searchedCompany}</div>
      </div>
      <div className="background">
        <div className="searchedCompany set_mwidth ">
          <div className="set_between">
            <h2 className="searchedCompanyLabel">
              회사
              <span>14</span>
            </h2>
            <div className="setArrows">
              <button className="arrowL set_center">
                <span className="SvgIconRoot">
                  <svg className="arrow_btnl_SvgIcon_root " viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
              <button type="button" className="arrowR set_center">
                <span className="SvgIconRoot">
                  <svg className="root__svg__DKYBi" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <ul className="companyList">
            {FilteredCompany.map((item) => (
              <li key={item.id} className="companyListItem">
                <div className="companyListLeft">
                  <img src={item.logo} className="logoImg"></img>
                  <div className="companyText">
                    <h5>{item.name}</h5>
                    <h6>{item.category}</h6>
                  </div>
                </div>
                <button className="followButton">팔로우</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="searchedPosition set_mwidth">
          <h2>
            포지션
            <span>5</span>
          </h2>
          <PopUpPart />
          <ul className="jobListItemContainer">
            {SearchedItems.map((item) => (
              <li className="jobListItem" key={item.id}>
                <header style={{ backgroundImage: `url(${item.imgUrl})` }}>
                  <button
                    className="bookmarkButton"
                    type="button"
                    aria-label="bookmark button"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                        fill="black"
                        fillOpacity="0.25"
                      ></path>
                    </svg>
                  </button>
                </header>
                <div className="jobListItemBody">
                  <div className="jobListItemPosition">{item.position}</div>
                  <div className="jobListItemName">{item.name}</div>
                  <button className="jobListItemTipLabel" type="button">
                    <div className="TipLabelVeryHigh">
                      <span>{item.tipLabel}</span>
                    </div>
                    <div className="jobListItemTipContent">
                      {item.tipContent}
                    </div>
                  </button>
                  <div className="jobListItemCompanyLocation">
                    {item.location1}
                    <span className="jobListItemDot">.</span>
                    <span>{item.location2}</span>
                  </div>
                  <div className="jobListItemReward">{item.reward}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default SearchPage;
