const baseUrl = 'http://localhost:3030/users'

export const login = (userData) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
}

export const register = (userData) => {
    return fetch(`${baseUrl}/register`,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
}