import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/helpers';

function Header({ currentPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Avalanche Tech</a>

        <ul className="nav justify-content-end">
          <li className="nav-item" key="about">
            <Link to="/" className={`nav-link ${currentPage === '/' && 'active'}`}>
              About
            </Link>
          </li>
          {pages.map((Page) => (
            <li className="nav-item" key={Page}>
              <Link to={`/${Page}`} className={`nav-link ${currentPage === `/${Page}` && 'active'}`}>
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