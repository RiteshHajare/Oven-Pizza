import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SingleOrder from './SingleOrder';

function AdminPage() {
    let navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const user = localStorage.getItem("username");
    useEffect(() => {


        if (user != "Ritesh") {
            navigate("../login", { replace: true });
        }

        axios.get("http://localhost:4000/getallorders")
            .then((res) => {
                // console.log(res.data);
                setOrders(res.data.reverse());
            })
    }, [])

    function handleLogout() {
        localStorage.clear();
    }


    // const mapArr = async (order) => {
    //     return (<SingleOrder order={order} />);
    // };

    function mapArr(order) {
        return (<SingleOrder order={order} />);
    }

    return (
        <div className='container adminPage'>
            <form >
                <button id="logout" type='submit' onClick={handleLogout} className="btn btn-info" ><i class="fa-solid fa-user"></i>&nbsp;&nbsp; Sign out</button>
            </form>
            <h1 className='welcome'>Welcome Admin</h1>
            <h2 className='h21'>Manage Custom Ingredients</h2>
            <div className="customingredients">
                <Link to="/adminbases"  ><img className='baseimg custimg' src="images/cheese burst base.jpg" alt="bases" /></Link>
                <Link to="/adminsauce" > <img className='baseimg custimg' src="images/buffalo sauce.jpg" alt="sauce" /></Link>
                <Link to="/admincheese" ><img className='baseimg custimg' src="images/mozzarella cheese.jpg" alt="cheese " /></Link>
                <Link to="/adminveggies" ><img className='baseimg custimg' src="images/bell peppers.jpg" alt="veggies" /></Link>
            </div>
            <hr />
            <div className="orders">
                <h2>Manage Customer Orders</h2>
                {orders.map(mapArr)}
            </div>
        </div>
    )
}

export default AdminPage



// &nbsp;&nbsp;<span ><i class="fa-regular fa-circle-check"></i></span>