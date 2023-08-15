import { useState } from "react";
import { changeUserName } from "../../services";
import { useDispatch } from 'react-redux'
import styles from './style/editForm.module.css';
import  { setProfil } from "../../reducers/profilSlice";


function EditForm({firstName, lastName}){
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();

    return(
        <div className={styles.editFormWrapper}>
            <form className={styles.editForm}>
                <h1 className={styles.editFormTitle}>Edit user info</h1>
                <div className={styles.editInputWrapper}>
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className={styles.editInputWrapper}>
            <label htmlFor="firstName">First name:</label>
            <input type="text" id="firstName" placeholder={`${firstName}`} disabled />
        </div>
        <div className={styles.editInputWrapper}>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" id="lastName" placeholder={`${lastName}`} disabled/>
        </div>
        <div className={styles.editButtonWrapper}>
            <button className={styles.editButton} onClick={(e) => {
                e.preventDefault();
                changeUserName(userName);
                dispatch(setProfil({userName}));
                window.location.reload('/user');
                }}>Save</button>
            <button className={styles.editButton}>Cancel</button>
        </div>
            </form>
        </div>
    )
}

export default EditForm;