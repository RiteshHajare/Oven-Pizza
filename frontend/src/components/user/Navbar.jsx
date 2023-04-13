import axios from 'axios';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar(props) {
    const user = localStorage.getItem("username");
    const [input, setInput] = useState("");
    // console.log(user);

    function handleLogout() {
        axios.get("https://ovenpizza-backend.onrender.com/logout")
            .then(function (res) {
                console.log(res.data);
            });
        localStorage.clear();
    }

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleClick() {
        props.inputt(input);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" ><img className='applogo' src="images/siteIcon.png" alt="Logo" /></Link>
                    <Link className="navbar-brand" to="/">Oven Pizza</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <form class="d-flex">
                            <input onChange={handleChange} value={input} className="form-control me-2" type="text" placeholder="Search" />
                            <button onClick={handleClick} class="btn btn-primary" type="button">Search</button>
                        </form>
                        <ul className="navbar-nav">
                            {user ? <li className="nav-item">
                                <NavLink className="linkk" activeClassName="active" aria-current="page" to="/cart" ><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp; Cart</NavLink>
                            </li> : null}
                            <li className={user === null ? "nav-item mkrt" : "nav-item"}>
                                <NavLink className="linkk" activeClassName="active" to="/orders"><i class="fa-solid fa-bell-concierge"></i>&nbsp;&nbsp; Orders</NavLink>
                            </li>
                            {user === null ?
                                <li className="nav-item">
                                    <NavLink className="linkk" activeClassName="active" to="/login"><i class="fa-solid fa-user"></i>&nbsp;&nbsp; Sign in</NavLink>
                                </li> :
                                <li className="nav-item">
                                    <Link onClick={handleLogout} className="linkk" to="/"><i class="fa-solid fa-user"></i>&nbsp;&nbsp; Sign out</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
