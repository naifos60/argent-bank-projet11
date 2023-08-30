import Account from "../../components/Account/account";
import EditForm from "../../components/EditForm/editForm";
import styles from './style/user.module.css';
import indexStyles from '../../index.module.css';
import headerStyles from '../../components/Header/style/header.module.css';
import { useEffect, useState  } from 'react';
import { useNavigate} from "react-router-dom";
import { getUserInfo } from "../../services";
import compareStorage from "../../middleware/middleware";
import { setProfil } from "../../reducers/profilSlice";
import { useDispatch } from "react-redux";


function User(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [edit, setEdit] = useState(false);
  const token = compareStorage();
  
   
  

  useEffect(() => {
    if(token === null){
      navigate('/logIn');
    }
    async function getDatas(){
      await getUserInfo().then(data => {
          setEmail(data.body?.email);
          console.log(email, firstName, lastName, userName);
          setFirstName(data.body?.firstName);
          setLastName(data.body?.lastName);
          setUserName(data.body?.userName);
          dispatch(setProfil({email, firstName, lastName, userName}))
        },
      )}
      getDatas(); 
    });

    function handleSubmit(){
      setEdit(!edit);
    }
  

    return(
      <div className={styles.user}>
         <main className={indexStyles.bgDark}>
          {!edit ?
            <div className={styles.headerUser}>
               <h1>Welcome back<br />{`${firstName} ${lastName}`} !</h1>
                <button className={styles.editButton} onClick={e => {e.preventDefault(); handleSubmit();}}>Edit Name</button>
            </div> :
            <EditForm firstName={firstName} lastName={lastName} submit= {handleSubmit}/>}
            <h2 className={headerStyles.srOnly}>Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
         </main>
      </div>
      ) 
    }

export default User;