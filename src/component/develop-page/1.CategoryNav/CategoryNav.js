function CategoryNav(){
  return(
    <article role="navigation" className="categoryNavbarContainer">
      <div className="categoryNavbarBody">
        <button
          className="categoryNavbarBodyFieldBox"
          type="button"
          ariaLabel="popup navigation button"
        >
          <span className="categoryNavbarBodyFieldText1">개발</span>
          <span
            className="moreButton"
            role="button"
            ariaLabel="popup navigation button"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path
                fill="#767676"
                fillRule="nonzero"
                d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
              ></path>
            </svg>
          </span>
        </button>
        <span className="categoryNavbarBodyFieldLine">|</span>
        <button
          type="button"
          className="categoryNavbarBodyFieldBox"
          ariaLabel="popup navigation button"
        >
          <span className="categoryNavbarBodyFieldText2">개발 전체</span>
          <span
            className="moreButton"
            role="button"
            ariaLabel="popup navigation button"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path
                fill="#767676"
                fillRule="nonzero"
                d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </article>
  );
}
export default CategoryNav;