import "./Header.scss";
import pageLogo from "../../../assets/icons/pageLogo.svg";
import searchIcon from "../../../assets/icons/search icon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { logOut } from "../../shared/UserWidget/userWidget.slice";
import { UserWidget } from "../../shared/UserWidget/UserWidget";
export const Header = () => {
  const userWidgetState = useSelector((state: RootState) => state.userWidget);
  const dispatch = useDispatch();

  const onLogOutClick = () => {
    dispatch(logOut());
  };
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
            {
            !userWidgetState.name && <>
              <Link to="/login" className="nav-link">Login</Link>
            </>
          }
          {
            userWidgetState.name && <>
              <button onClick={onLogOutClick}>Log out</button>
              <UserWidget />
            </>
          }
          </nav>
          <img src={searchIcon} alt="" />
        </div>
      </div>
    </header>
  );
};
