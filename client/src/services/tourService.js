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
    return fetch(baseUrl)
        .then(res => res.json())
}

export const getOne = (tourId) => {
    return  fetch(`${baseUrl}/${tourId}`)
                .then(res => res.json())
}