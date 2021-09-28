import React, { useState } from 'react'
export const RootContext = React.createContext();


export default ({ children }) => {
    const [user, setUser] = useState([]);
    const [token, setToken] = useState();
    const defaultValues = {
        user,
        setUser,
        token,
        setToken
    };
    console.log("root context", RootContext)
    return (<RootContext.Provider value={defaultValues}>{children}</RootContext.Provider>);
}