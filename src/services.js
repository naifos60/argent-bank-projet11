<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom"
=======
import { useNavigate} from "react-router-dom"
>>>>>>> Stashed changes

async function logUser(infoUser) {
    const navigate = useNavigate;
    const redirect = () => (navigate("/user"));
    const request = await fetch('http://localhost:3001/api/v1/user/login',{
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: infoUser
    })
    if(!request.ok){
        throw new Error("erreur API");
    }
    else if(request.status === "401" || request.status === "403"){
        redirect();
    }
<<<<<<< Updated upstream
=======
    const identifyUserName = JSON.stringify(modifUserName);
    const request = await fetch('http://localhost:3001/api/v1/user/profile',{
        method : "PUT",
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + token
        },
        body: identifyUserName
    })
>>>>>>> Stashed changes
    const result = await request.json();
    return result
};

<<<<<<< Updated upstream
export {logUser}
=======
async function getUserInfo(){
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate;
    const request = await fetch('http://localhost:3001/api/v1/user/profile',{
        method : "POST",
        headers: {
            'Accept' : 'application/json',
            'Authorization' : 'Bearer ' + token
        },
    })
     if(request.status === "401" || request.status === "403"){
        navigate('/signIn');
    }
    const result = await request.json();
    return result;
};

export {logUser, changeUserName, getUserInfo}
>>>>>>> Stashed changes
