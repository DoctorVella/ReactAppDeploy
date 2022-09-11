import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const [loading,setLoading] = useState(false)

    const axiosInstance = axios.create({
        baseURL: `https://app-express-deploy.herokuapp.com/mongo`,
        headers: {
            'content-type': 'application/json'
        }
    })

    return <AppContext.Provider value={{axiosInstance,loading,setLoading}}>
        {props.children}
    </AppContext.Provider>
}