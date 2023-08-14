import { useState } from "react";
import { useNavigate} from "react-router-dom"
import styles from './style/form.module.css';
import { useDispatch } from 'react-redux';
import { setProfil } from '../../reducers/profilSlice';
import { logUser } from "../../services";


function Form(){
  const navigate = useNavigate();
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [userLog, setUserLog] = useState(false);
  const dispatch = useDispatch();


  async function logIn(e){
    e.preventDefault();
    const emailUser = email;
    const passwordUser = password;
    const infoUser = {
        email: emailUser,
        password: passwordUser
    };
    const identify = JSON.stringify(infoUser);
  await logUser(identify).then(data => {
      const generateToken = data.body?.token;
      if(data.status === 400){
        setUserLog(true);
        
      }
      else if(data.status === "401" || data.status === "403"){
        navigate('/signIn');
    }
      else if(checked === false){
      sessionStorage.setItem('token', generateToken);
      navigate('/user');
      }
      else if (checked === true){
        localStorage.setItem('token', generateToken);
        navigate('/user');
      }
      
      dispatch(setProfil({email, password}));
  })
}
    return(
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={userLog ? styles.errorTrue : styles.errorWrapper}>
          <p className={styles.errorMessage}>* Erreur dans l’identifiant ou le mot de passe</p>
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" onChange={() => setChecked(!checked)}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={styles.signInButton} onClick={logIn}>Sign In</button>
        </form>
    )
}

export default Form;