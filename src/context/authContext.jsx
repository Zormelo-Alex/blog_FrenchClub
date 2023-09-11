import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) =>{
    //checking wheather there's already a user in the local storage if not set default user to null
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [token, setToken] = useState(null);

    
    
    const Url = import.meta.env.VITE_ROUTE


    //creating the login function here instead
    const login = async(inputs) => {
        try {
            const res = await axios.post(`${Url}/auth/signIn`, inputs);
            setCurrentUser(res.data);
            setToken(res.data.token)
            return(res.data)
        } catch (error) {
            return("error " + error)
        }
    }

    const register = async(inputs) => {
        try {
            const res = await axios.post(`${Url}/auth/signUp`, inputs);
            setCurrentUser(res.data);
            setToken(res.data.token)
            
            return(res.data)
        } catch (error) {
            return("error " + error)
        }
    }

    const logout = () => {
        setCurrentUser(null)
        console.log("user logged out")
    }


    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
        if(!currentUser) return
        setToken(currentUser.token)
    }, [currentUser])


    return(
        <AuthContext.Provider value={{currentUser, login, logout, register}}>{children}</AuthContext.Provider>
    )
}