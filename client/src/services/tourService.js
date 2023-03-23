const baseUrl = "http://localhost:3030/jsonstore/tours"

export const getAll = () => {
    fetch(baseUrl)
        .then(res => res.json())
        
}