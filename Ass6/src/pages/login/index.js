import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { RootContext } from "../../context/RootContext"
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import './index.css'

function Login() {
    let schema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required'),
      }); 
      
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema:schema,
        onSubmit: (value) => {
            handleLogin(value)
        }
    })

    //const {user, setToken} = useContext(RootContext)


    function handleLogin(value) {

        // console.log("handle login", user)
        // let temp=[...user]
        // temp.forEach(Element => {
        //     if (Element.email == email && Element.password == password) {
        //         setToken("authorized");
        //         history.push("/")
        //     }
        //     else
        //     setFlag(true);
        //})
        localStorage.setItem("authorized", "authorized");
        history.push("/")
    }

    let history = useHistory();
    return (
        <div className="login">
            <div>
                <img className="background_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="background" />
                <button className="signin" onClick={() => history.push("/signup")}>Signup</button>
                <div className="background_gradient" />
            </div>
            <div className="body">

                <div className="form">
                    <h1>Make a Movie List of all your Favourite Movies</h1>
                    <h2>Login</h2>
                    <div className="body_input">
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && <div>{formik.errors.email}</div>}
                            <br></br>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.password && <div>{formik.errors.password}</div>}
                            <br></br>
                            <button type="submit" className="btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;