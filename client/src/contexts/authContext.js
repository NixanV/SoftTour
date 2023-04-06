import {createContext, useState} from 'react'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(
        localStorage.getItem('authSession')
    ));

    const userLogin = (data) => {
        setUser(data);
        localStorage.setItem('authSession', JSON.stringify(data));
    }

    const userLogout = () => {
        localStorage.removeItem('authSession');
        setUser({});
        localStorage.setItem('authSession', JSON.stringify({}))
    }

    return (
        <AuthContext.Provider 
            value={{user, userLogin, userLogout}}
        >
            {children}
        </AuthContext.Provider>
    )
}