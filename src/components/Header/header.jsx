import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../services";
import { useDispatch } from 'react-redux';
import { setProfil } from "../../reducers/profilSlice";
import { useEffect, useState } from 'react';
import logo from "../../asset/img/argentBankLogo.png";
import styles from './style/header.module.css';


function Header(){
  const redirect = () => (navigate("/"));
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const token = sessionStorage.getItem('token');

  const resetState = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setUserName("");
    dispatch(setProfil({email, password, firstName, lastName, userName}));
  }
  async function getDatas(){
    await getUserInfo().then(data => {
        setUserName(data.body?.userName); 
      },
      dispatch(setProfil({userName}))
    )};
  

  useEffect(() => {
    if(token !== null){
     getDatas();
    }
  })
  // const localToken = localStorage.getItem('token');
  const sessionToken = sessionStorage.getItem('token');
  if (sessionToken === null ){
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
                    {`${userName}`}
                  </a>
                  <a className={styles.headerMainNavItem} href="./" onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.clear('token');
                    resetState();
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
}

export default Header;