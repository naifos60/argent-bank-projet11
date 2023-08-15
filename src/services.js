import { useNavigate } from "react-router-dom"

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
    const result = await request.json();
    redirect();
    return result
}

async function changeUserName(userName){
    const token = sessionStorage.getItem('token');
    const modifUserName = {
        userName: userName
    }
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

    const result = await request.json();
    return result
};

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

