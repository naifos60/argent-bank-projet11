<<<<<<< Updated upstream
=======
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../services";
import { useDispatch } from 'react-redux';
import { setProfil } from "../../reducers/profilSlice";
import { useEffect, useState } from 'react';
>>>>>>> Stashed changes
import logo from "../../asset/img/argentBankLogo.png";
import styles from './style/header.module.css';


function Header(){
<<<<<<< Updated upstream
=======
  const redirect = () => (navigate("/"));
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [userName, setUserName] = useState('');
  async function getDatas(){
    await getUserInfo().then(data => {
        setUserName(data.body?.userName); 
      },
      dispatch(setProfil({ userName}))
    )};
  

  useEffect(() => {
     getDatas();
  })
  
  // const localToken = localStorage.getItem('token');
  const sessionToken = sessionStorage.getItem('token');
  if (sessionToken === null ){
>>>>>>> Stashed changes
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
        <a className={styles.hearderMainNavItem} href="./signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    </header>
    )
<<<<<<< Updated upstream
=======
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
                    {`${userName}`}
                  </a>
                  <a className={styles.headerMainNavItem} href="./" onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.clear('token');
                    redirect();
                    }}>
                  <i className="fa fa-sign-out"></i>
                    Sign Out
                  </a>
                </div>
              </nav>
            </header>
    )
  }
          
        

        
    
>>>>>>> Stashed changes
}

export default Header;