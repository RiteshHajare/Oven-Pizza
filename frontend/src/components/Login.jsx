import React, { useEffect, useState } from 'react'
import Navbar from './user/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const [user, setuser] = useState("");
    let navigate = useNavigate();
    const [err, seterr] = useState("");
    const [logUser, setLogUser] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        seterr("");
        setLogUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    function handleClick() {
        if (logUser.username === "" || logUser.password === "") {
            seterr("please recheck credentials.");
            return;
        }

        axios.post("https://ovenpizza-backend.onrender.com/login", logUser)
            .then((response) => {

                console.log(response.data);
                setuser(response.data.user)

                seterr(response.data.message);

            });
    }

    useEffect(() => {
        if (err === "user loggedIn") {
            localStorage.setItem("username", user.username);

            console.log(user.username);
            navigate("../", { replace: true });
        } else if (err === "admin") {
            localStorage.setItem("username", user.username);

            navigate("/admin", { replace: true });
        }
    }, [err])



    return (
        <div>
            <Navbar auth={err} />
            <div className='login'>
                <img src="images/backgroundLogin.jpg" alt="" />
                <div className="logincomponent">
                    <h2>Login</h2>
                    <div>
                        <label htmlFor="#username">Username:</label>
                        <input onChange={handleChange} name="username" value={logUser.username} type="text" id="username" placeholder='Username' />
                    </div>
                    <div><label htmlFor="#Password">Password:</label>
                        <input onChange={handleChange} name="password" value={logUser.password} type="password" id="Password" placeholder='Password' /></div>
                    <button onClick={handleClick} className='btn btn-primary'>Submit</button>
                    <div>{err === "success" ? "" : err} </div>
                    <small>don't have an account? <Link to="/register">Register</Link></small>
                </div>
            </div>
        </div>
    )
}

export default Login

