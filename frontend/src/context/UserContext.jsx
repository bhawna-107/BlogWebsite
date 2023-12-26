import { createContext, useEffect, useState } from "react";
import { url } from "../url";
import axios from "axios";

export const UserContext= createContext({});

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(()=>{
        getUser();

    }, [])

    const getUser = async() =>{
        try{
            const res= await axios.get(url+ "/api/auth/refetch", {withCredentials:true})
            setUser(res.data)
            console.log(res.data);

        }
        catch(err){
            console.error(err);
        }
    }
    
    return (<UserContext.Provider value={{user,setUser}}>
       {children}
    </UserContext.Provider>)
}