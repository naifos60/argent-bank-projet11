import { useState } from "react";
import styles from './style/editForm.module.css';
import PropTypes  from "prop-types";
import { changeTheUserName } from "../../reducers/profilSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../utils/selector"

function EditForm({firstName, lastName}){
    const [userName, setUserName] = useState('');
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    async function handleChangeUserNameEvent(e){
        e.preventDefault();
        dispatch(changeTheUserName(userName));
    }
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
            <input type="text" id="firstName" placeholder={firstName} disabled />
        </div>
        <div className={styles.editInputWrapper}>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" id="lastName" placeholder={lastName} disabled/>
        </div>
        <div className={styles.editButtonWrapper}>
            <button className={styles.editButton} onClick={(e) => {handleChangeUserNameEvent(e); window.location.reload('/profil')}}>{loading ? "loading..." : "Save"}</button>
            <button className={styles.editButton} onClick={(e) =>{e.preventDefault(); window.location.reload('/profil')}}>Cancel</button>
        </div>
            </form>
        </div>
    )
}

EditForm.propsTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }

export default EditForm;