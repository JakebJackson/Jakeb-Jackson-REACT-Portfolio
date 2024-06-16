import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header({ currentPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav className="navbar py-3 shadow bg-onyx sticky-top">
      <div className="container-fluid w-md-50">
        <h1 className="text-light" href="/">My Portfolio</h1>

        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item" key="about">
            <Link to="/" style={{color:"#B48EAE"}} className={`color-lilac nav-link ${currentPage === '/' && 'active'}`}>
              About
            </Link>
          </li>
          {pages.map((Page) => (
            <li className="nav-item" key={Page}>
              <Link to={`/${Page}`} style={{color:"#B48EAE"}} className={`nav-link ${currentPage === `/${Page}` && 'active'}`}>
                {capitalizeFirstLetter(Page)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;