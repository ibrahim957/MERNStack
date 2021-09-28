import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { RootContext } from "../context/RootContext"

//const {token} = useContext(RootContext)
const ProtectedRoute = ({ children, ...restProps }) => {
    let aut = localStorage.getItem('authorized');
    //let aut = token;
    return (
        <Route
            {...restProps}
            render={() => {
                if (aut){
                //if(aut =="authorized")
                    return children;
                }
                else
                    return <Redirect to="/login" />
            }}
        />
    )
}
export default ProtectedRoute