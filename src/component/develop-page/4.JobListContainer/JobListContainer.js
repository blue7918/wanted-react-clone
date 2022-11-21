import Items from '../../../json/JobListItem.json';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBookMark, deleteBookMark } from '../../../modules/bookMark';

function JobListContainer() {
  const bookMarkList = useSelector((state) => state.bookmarking);
  console.log('list:' + bookMarkList);

  const dispatch = useDispatch();
  const bookMarkToggle = (e) => {
    if (bookMarkList.includes(e)) {
      dispatch(deleteBookMark(e));
    } else {
      dispatch(addBookMark(e));
    }
  };
  return (
    <ul className="jobListItemContainer">
      {Items.JobItems.map((item) => (
        <li className="jobListItem" key={item.id}>
          <button
            className="bookmarkButton"
            type="button"
            aria-label="bookmark button"
            onClick={() => bookMarkToggle(item.id)}
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
                fill={
                  bookMarkList.includes(item.id) ? 'rgb(51, 102, 255)' : 'black'
                }
                fillOpacity={bookMarkList.includes(item.id) ? '' : '0.25'}
              ></path>
            </svg>
          </button>
          <Link to={`/develop/${item.id}`}>
            <header style={{ backgroundImage: `url(${item.imgUrl})` }}></header>
            <div className="jobListItemBody">
              <div className="jobListItemPosition">{item.position}</div>
              <div className="jobListItemName">{item.name}</div>
              <button className="jobListItemTipLabel" type="button">
                <div className="TipLabelVeryHigh">
                  <span>{item.tipLabel}</span>
                </div>
                <div className="jobListItemTipContent">{item.tipContent}</div>
              </button>
              <div className="jobListItemCompanyLocation">
                {item.location1}
                <span className="jobListItemDot">.</span>
                <span>{item.location2}</span>
              </div>
              <div className="jobListItemReward">{item.reward}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default JobListContainer;
