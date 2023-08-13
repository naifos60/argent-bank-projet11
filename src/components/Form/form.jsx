import { useState } from "react";
import { useNavigate} from "react-router-dom"
import styles from './style/form.module.css';
import { useDispatch } from 'react-redux';
import { setProfil } from '../../reducers/profilSlice';
import { logUser } from "../../services";






function Form(){
  const redirect = () => (navigate("/"));
  const navigate = useNavigate();
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
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
      const generateToken = data.body.token;
      if(checked === false){
      sessionStorage.setItem('token', generateToken);
      }
      else if (checked === true){
        localStorage.setItem('token', generateToken);
      }
      
      dispatch(setProfil({email, password}));
      redirect();
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
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" onChange={() => setChecked(!checked)}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={styles.signInButton} onClick={logIn}>Sign In</button>
        </form>
    )
}

export default Form;