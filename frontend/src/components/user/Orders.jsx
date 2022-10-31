import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar'
import UserOrder from './UserOrder';

function Orders() {
    const username = localStorage.getItem("username");

    const [orderArr, setOrderArr] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:4000/getorders", { username })
            .then((res) => {
                // console.log(res.data);
                setOrderArr(res.data.reverse());
            })
    }, []);

    function spreadArr(order) {



        return (<UserOrder order={order} />);
    }


    return (
        <div>
            <Navbar />
            <div className='CartPage'>
                <h1 className='carth1'>Orders</h1>
                {orderArr.map(spreadArr)}
            </div>
            <Footer />
        </div>
    )
}

export default Orders
