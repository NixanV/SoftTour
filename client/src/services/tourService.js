const baseUrl = "http://localhost:3030/jsonstore/tours"
const authUrl = "http://localhost:3030/data/tours"

export const createPost = (information, accessToken) => {
    return fetch(authUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(information)
    })
        .then(res => res.json())
}

export const getAll = () => {
    return fetch(authUrl)
        .then(res => res.json())
}

export const getOne = (tourId) => {
    return  fetch(`${authUrl}/${tourId}`)
                .then(res => res.json())
}

export const deletePost = (tourId, accessToken) => {
    return fetch(`${authUrl}/${tourId}`, {
        method: "DELETE", 
        headers: {
            "X-Authorization": accessToken
        }
    })
        .then(res => res.json())
}

export const editPost = (tourId, accessToken, data) => {
    return fetch(`${authUrl}/${tourId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
}


