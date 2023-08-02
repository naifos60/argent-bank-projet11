import { useNavigate} from "react-router-dom"


function Form(){
  const redirect = () => (navigate("/user"));
  const navigate = useNavigate();
    return(
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={redirect}>Sign In</button>
        </form>
    )
}

export default Form;