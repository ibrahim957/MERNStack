import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { RootContext } from "../../context/RootContext"
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import './index.css'

function Signup() {

    let schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        name: yup.string().required("Name is required"),
        pass: yup.string().required('Password is required'),
        confirm: yup.string().oneOf([yup.ref('pass'), null], 'Passwords must match')
      });

    let history = useHistory();

    
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            confirm: '',
        },
        validationSchema:schema,
        onSubmit: (value) => {
            handleFormSubmit(value)
        }
    })

    //const {user, setUser } = useContext(RootContext)
    
    function handleFormSubmit(value) {
            //let temp = [...user]
           // temp.push({ email: email, name: name, pass: pass })
            //setUser(temp);
            history.push("/login")
    }
    return (
        <div className="signup">
            <div>
                <img className="background_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="background" />
                <button className="signin" onClick={() => history.push("/login")}>Login</button>
                <div className="background_gradient" />
            </div>
            <div className="body">

                <div className="form">
                    <h2>SignUp</h2>
                    <div className="body_input">
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            
                            <input
                                type="User-Name"
                                placeholder="UserName"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            <br></br>
                            <div classname="row mt2">
                            {formik.errors.email && <div>{formik.errors.email}</div>}
                            {formik.errors.name && <div>{formik.errors.name}</div>}
                            </div>
                            <br></br>
                            <input
                                type="password"
                                placeholder="Password"
                                name="pass"
                                value={formik.values.pass}
                                onChange={formik.handleChange}
                            />
                            
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirm"
                                value={formik.values.confirm}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.pass && <div>{formik.errors.pass}</div>}
                            {formik.errors.confirm && <div>{formik.errors.confirm}</div>}
                            <br></br>
                            <button type="submit" className="btn">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;