import React, { useEffect, useState } from 'react'
import Navbar from './user/Navbar'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function Register() {

    let navigate = useNavigate();
    const [userID, setuserID] = useState("");
    const [takeToLogin, settakeToLogin] = useState(null);
    const [otp, setotp] = useState("");
    const [err, seterr] = useState("");
    const [takeHome, setTakeHome] = useState("");
    const [checkOTP, setCheckOTP] = useState(false);
    const [registerUser, setregisterUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    function handleChange(e) {
        const { name, value } = e.target;
        seterr("");
        setregisterUser((prevVals) => {
            return { ...prevVals, [name]: value }
        })
    }

    function handleClick() {

        if (registerUser.username === "") {
            seterr("Please, set valid username.");
            return;
        }
        const email = registerUser.email;
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            seterr("Invalid Email.");
            return;
        }
        if (registerUser.email === "") {
            seterr("Please, set valid Email.")
            return;
        }
        if (registerUser.password === "") {
            seterr("Please, set valid Password.")
            return;
        }
        if (registerUser.password !== registerUser.confirmPassword) {
            seterr("Password do not match confirm password.");
            return;
        }

        axios.post("https://ovenpizza-backend.onrender.com/register", registerUser)
            .then((response) => {

                console.log(response.data);


                seterr(response.data.message);
                setuserID(response.data._id);
                setTakeHome(response.data.success);


            });


    }
    useEffect(() => {
        if (takeHome === true) {
            setCheckOTP(true);

        }
    });

    function noteChange(e) {
        setotp(e.target.value);
    }

    function handleSubmit() {
        // console.log(typeof otp);
        axios.post("https://ovenpizza-backend.onrender.com/checkotp", { otp })
            .then((res) => {
                settakeToLogin(res.data.success);

            })
    }
    useEffect(() => {
        console.log(takeToLogin);
        if (takeToLogin === true) {
            navigate("../login", { replace: true });
        } else if (takeToLogin === false) {
            axios.post("https://ovenpizza-backend.onrender.com/removeuser", { userID })
                .then((res) => {
                    console.log(res.data);
                    seterr(res.data.message);
                })
        }
    }, [takeToLogin])



    return (
        <div>
            <Navbar />
            <div className='login'>

                <img src="https://images.pexels.com/photos/4783544/pexels-photo-4783544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                <div className="registercomponent logincomponent">
                    <h2>Register</h2>
                    {checkOTP ?
                        <div className="checkotp">
                            <h4 className='fillotp'>Please fill OTP from mail</h4>
                            <input type="text" onChange={noteChange} value={otp} name="otp" />
                            <button onClick={handleSubmit} className='sub btn btn-primary'>Submit</button>
                        </div>
                        :
                        <><div>
                            <label htmlFor="#username">Username:</label>
                            <input onChange={handleChange} name="username" value={registerUser.username} type="text" id="username" placeholder='Username' />
                        </div><div>
                                <label htmlFor="#email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:</label>
                                <input onChange={handleChange} value={registerUser.email} name="email" type="email" id="email" placeholder='Email' />
                            </div><div>
                                <label htmlFor="#Password">Password:</label>
                                <input onChange={handleChange} value={registerUser.password} name="password" type="password" id="Password" placeholder='Password' />
                            </div><div>
                                <label htmlFor="#ConfirmPassword">Password:</label>
                                <input onChange={handleChange} value={registerUser.confirmPassword} name="confirmPassword" type="password" id="ConfirmPassword" placeholder='Confirm Password' />
                            </div><button onClick={handleClick} className='btn btn-primary'>Submit</button></>
                    }
                    <small className='Registererr'>{err === "Your account successflully created." ? "" : err} </small>
                    <small>already have an account? <Link to="/login">Login</Link></small>
                </div>
            </div>
        </div>
    )
}

export default Register