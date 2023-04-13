import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar'

function Cart() {
    const username = localStorage.getItem("username");
    const [cartArr, setCartArr] = useState([]);
    useEffect(() => {
        axios.post("https://ovenpizza-backend.onrender.com/cart", { username })
            .then((res) => {
                // console.log(res.data);
                setCartArr(res.data);
            })
    }, [])


    function spreadCart(oneCart) {

        function handleClick() {
            const _id = oneCart._id;
            axios.post("https://ovenpizza-backend.onrender.com/removefromcartt", { _id, username });
            window.location.reload(true);
        }

        function btnClick2() {
            const _id = oneCart._id;
            axios.post("https://ovenpizza-backend.onrender.com/addtoorders", { _id, username });
            window.location.reload(true);
        }

        return (
            <div className=" card cart">

                <button type='submit' onClick={handleClick} className='removefromcart'>×</button>

                <h5>{oneCart.pizza}</h5>
                <div className="cartbody">
                    <div className="bigdiv">
                        <div className="div1">
                            <p>Username : {oneCart.username}</p>
                            <p>quantity : {oneCart.quantity}</p>
                            <p>Total price : {oneCart.totalPrice}</p>
                        </div>
                        <div className="div2">
                            <p>{oneCart.base ? "base : " : null} {oneCart.base}</p>
                            <p>{oneCart.sauce ? "sauce :" : null}  {oneCart.sauce}</p>
                            <p>{oneCart.cheese ? "cheese :" : null}  {oneCart.cheese}</p>
                            <p>{oneCart.veggies ? "veggies :" : null}  {oneCart.veggies}</p>
                        </div>
                    </div>


                    <button type='submit' onClick={btnClick2} className='btn btn-primary'>Confirm Order</button>

                </div>
            </div>
        )
    }

    return (
        <div  >
            <Navbar />
            <div className=" CartPage container">
                <h1 className='carth1'>Cart</h1>
                {cartArr.map(spreadCart)}
            </div>
            <Footer />
        </div>
    )
}

export default Cart

{/* <div className=" card cart">
                    <button className='removefromcart'>×</button>
                    <h3>scscccccccccdddddd</h3>
                    <div className="cartbody">
                        <h6>status : pending</h6>
                        <p>quantity : 2</p>
                        <p>Total price : 500</p>
                        <button className='btn btn-primary'>Confirm</button>
                    </div>
                </div> */}