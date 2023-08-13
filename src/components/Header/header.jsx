import { useNavigate } from "react-router-dom";
import logo from "../../asset/img/argentBankLogo.png";
import styles from './style/header.module.css';


function Header(){
  const redirect = () => (navigate("/"));
  const navigate = useNavigate();
  // const localToken = localStorage.getItem('token');
  const sessionToken = sessionStorage.getItem('token');
  if (sessionToken === null){
    return(
    <header className={styles.header}>
        <nav className={styles.headerMainNav}>
        <a className={styles.headerMainNavItemLogo} href="./"> 
        <img
          className={styles.headerMainNavItemLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </a>
        <div>
        <a className={styles.headerMainNavItem} href="./signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
        </div>
      </nav>
    </header>
    )
      }else {
        return (
            <header className={styles.header}>
                <nav className={styles.headerMainNav}>
                <a className={styles.headerMainNavItemLogo} href="./"> 
                <img
                  className={styles.headerMainNavItemLogoImage}
                  src={logo}
                  alt="Argent Bank Logo"
                />
                <h1 className={styles.srOnly}>Argent Bank</h1>
                </a>
                <div>
                  <a className={styles.headerMainNavItem} href="./user">
                  <i className="fa fa-user-circle"></i>
                    Tony
                  </a>
                  <a className={styles.headerMainNavItem} href="./" onClick={(e) => {e.preventDefault(); sessionStorage.clear('token'); redirect()}}>
                  <i className="fa fa-sign-out"></i>
                    Sign Out
                  </a>
                </div>
              </nav>
            </header>
    )
  }
          
        

        
    
}

export default Header;