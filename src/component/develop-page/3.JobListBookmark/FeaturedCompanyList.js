import Items from '../../../json/FeaturedCompany.json';

function FeaturedCompanyList() {
  return (
    <>
      {Items.FeaturedCompanyItem.map((item) => (
        <li className="featuredCompanyListItem" key={item.id}>
          <header>
            <img
              className="featuredCompanyListItemImg "
              src={item.imgUrl}
            ></img>
          </header>
          <footer>
            <div
              className="featuredCompanyLogo featuredCompanyListItemLogo"
              style={{
                backgroundImage: `url(${item.logoImg})`,
              }}
            ></div>
            <h4>{item.name}</h4>
            <h5>{item.positions}</h5>
          </footer>
        </li>
      ))}
    </>
  );
}
export default FeaturedCompanyList;
