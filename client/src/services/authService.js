const baseUrl = 'http://localhost:3030/users'

export const login = async (userData) => {
    return await fetch(`${baseUrl}/login`,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
}