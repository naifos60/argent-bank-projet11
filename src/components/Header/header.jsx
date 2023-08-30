import { useNavigate, Link } from "react-router-dom";
import { getUserInfo } from "../../services";
import { useDispatch, useSelector } from 'react-redux';
import { setProfil, setToken, setTheUserName } from "../../reducers/profilSlice";
import { useEffect} from 'react';
import logo from "../../asset/img/argentBankLogo.webp";
import styles from './style/header.module.css';
import compareStorage from "../../middleware/middleware";
import { selectTheUserName } from "../../utils/selector";


function Header(){
  const redirect = () => (navigate("/"));
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const userName = useSelector(selectTheUserName);
  const token = compareStorage();

  const resetState = () => {
    dispatch(setProfil(null));
    dispatch(setToken(null));
  }
  async function getDatas(){
    await getUserInfo().then(data => {
        dispatch(setTheUserName(data.body?.userName));
        console.log(userName)
      },
    )};
  

  useEffect(() => {
    if(token !== null){
    getDatas();
    } 
  })

  if (token === null ){
    return(
    <header className={styles.header}>
        <nav className={styles.headerMainNav}>
        <Link to={"./"} className={styles.headerMainNavItemLogo} > 
        <img
          className={styles.headerMainNavItemLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </Link>
      <div>
        <Link to={"./logIn"} className={styles.headerMainNavItem} >
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    </header>
    )

      }else {
        return (
            <header className={styles.header}>
                <nav className={styles.headerMainNav}>
                <Link to={"./"} className={styles.headerMainNavItemLogo} > 
                <img
                  className={styles.headerMainNavItemLogoImage}
                  src={logo}
                  alt="Argent Bank Logo"
                />
                <h1 className={styles.srOnly}>Argent Bank</h1>
                </Link>
                <div>
                  <Link to={"./profil"} className={styles.headerMainNavItem} >
                  <i className="fa fa-user-circle"></i>
                    {`${userName}`}
                  </Link>
                  <Link to={"./"} className={styles.headerMainNavItem}  onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.clear();
                    localStorage.clear();
                    resetState();
                    redirect();
                    }}>
                  <i className="fa fa-sign-out"></i>
                    Sign Out
                  </Link>
                </div>
              </nav>
            </header>
    )
  }
}

export default Header;