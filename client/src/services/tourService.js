const baseUrl = "http://localhost:3030/jsonstore/tours"

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const getOne = (tourId) => {
    return  fetch(`${baseUrl}/${tourId}`)
                .then(res => res.json())
}