import './Header.scss';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { UserWidget } from '../../shared/UserWidget/UserWidget';
import { logOut } from '../../shared/UserWidget/userWidget.slice';
import { useDispatch, useSelector } from 'react-redux';
import pageLogo from '../../../assets/icons/pageLogo.svg';
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
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            {!userWidgetState.currentUser && (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </>
            )}
            {userWidgetState.currentUser && (
              <>
                <Link to="/profile" className="nav-link">Profile</Link>
                <button onClick={onLogOutClick}>Log out</button>
                <UserWidget />
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
