async function logUser(infoUser) {
    const request = await fetch('http://localhost:3001/api/v1/user/login',{
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: infoUser
    })
    const result = await request.json();
    return result
};

async function changeUserName(userName) {
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
            'Authorization' : token
        },
        body: identifyUserName
    })
    const result = await request.json();
    return result
};

export {logUser, changeUserName}