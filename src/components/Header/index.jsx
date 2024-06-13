import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header({ currentPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav className="navbar p-3 border-bottom border-4 border-sky-blue bg-onyx">
      <div className="container-fluid">
        <h1 className="text-fawn" href="/">My Portfolio</h1>

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