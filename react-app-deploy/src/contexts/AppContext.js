import { createContext } from "react";
import axios from "axios";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {

    const axiosInstance = axios.create({
        baseURL: `https://app-express-deploy.herokuapp.com/mongo`,
        headers: {
            'content-type': 'application/json'
        }
    })

    return <AppContext.Provider value={{axiosInstance}}>
        {props.children}
    </AppContext.Provider>
}