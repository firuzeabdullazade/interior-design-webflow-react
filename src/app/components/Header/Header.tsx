import "./Header.scss";
import pageLogo from "../../../assets/icons/pageLogo.svg";
import searchIcon from "../../../assets/icons/search icon.svg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={pageLogo} alt="Page Logo" />
        <div className="nav-icon-part">
          <nav>
            <Link to="" className="nav-link">Home</Link>
            <Link to="" className="nav-link">Pages</Link>
            <Link to="" className="nav-link">Services</Link>
            <Link to="" className="nav-link">Project</Link>
            <Link to="" className="nav-link">Blog</Link>
            <Link to="" className="nav-link">Contact</Link>
            <Link to="" className="nav-link">Login</Link>
          </nav>
          <img src={searchIcon} alt="" />
        </div>
      </div>
    </header>
  );
};
