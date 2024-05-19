import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext()
export default function Authprovider({children}){
    const initialAuthUser = localStorage.getItem("Users")
    const [authUser,setauthUser]= useState(
        initialAuthUser ? JSON.parse(initialAuthUser):undefined
    )
    return(
        <AuthContext.Provider value={[authUser,setauthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{return useContext(AuthContext)}