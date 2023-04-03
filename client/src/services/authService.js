export const saveUser = (user) => {
    if(user.accessToken){
        localStorage.setItem('user', JSON.stringify(user))
    }
}