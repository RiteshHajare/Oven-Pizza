import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SingleOrder(props) {

    const [status, setStatus] = useState("");

    function handleClk(event) {
        console.log(event.target.className);
        setStatus(event.target.className);
        const _id = props.order._id;

        const status = event.target.className;
        
        axios.post("https://ovenpizza-backend.onrender.com/changestatus", { status, _id });

        // window.location.reload(true);
    }

    useEffect(() => {
        setStatus(props.order.status);
    }, [])




    return (
        <div>
            <div className="card order" >
                <h4>{props.order.pizza}</h4>
                <div className="cartbody">
                    <div className="bigdiv">
                        <div className="div1">
                            <p>Username : {props.order.username}</p>
                            <h5 className='statuss'>set status : <div class="dropdown">
                                <button class="dropbtn">{status} ↓ </button>
                                <div class="dropdown-content">
                                    <a onClick={handleClk} className="Out for Delivery" name="Out for Delivery" >Out for Delivery</a>
                                    <a onClick={handleClk} className="Delivered" name="Delivered" >Delivered</a>
                                </div>
                            </div> </h5>

                            <p>quantity : {props.order.quantity}</p>
                            <p>Total price : {props.order.totalPrice}</p>

                        </div>
                        <div className="div2">
                            <p>{props.order.base ? "base : " : null} {props.order.base}</p>
                            <p>{props.order.sauce ? "sauce :" : null}  {props.order.sauce}</p>
                            <p>{props.order.cheese ? "cheese :" : null}  {props.order.cheese}</p>
                            <p>{props.order.veggies ? "veggies :" : null}  {props.order.veggies}</p>
                        </div>
                    </div>
                    <p className='orderid'>OrderId : {props.order._id} </p>
                </div>
            </div></div>
    )
}

export default SingleOrder

{/* <input className='Adminpageinp' onChange={handleChange} name="setstatus" value={status} type="text" /> */ }
