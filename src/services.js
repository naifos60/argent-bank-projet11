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

export {logUser}