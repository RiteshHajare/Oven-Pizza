import React, { useEffect, useState } from 'react'

function UserOrder(props) {
    const [status, setStatus] = useState("Order sent");

    useEffect(() => {
        if (props.order.status) {
            setStatus(props.order.status);
            // console.log(props.order.status);
        }
    }, [])

    return (
        <div>
            <div className="container">
                <div className=" card cart orderss">
                    {status === "Delivered" ? <span className='rightcorner' ><i class="fa-regular fa-circle-check"></i></span> : null}
                    <h5>{props.order.pizza}</h5>
                    <div className="cartbody">
                        <div className="bigdiv">
                            <div className="div1">
                                <p>Username : {props.order.username}</p>
                                <h6>status : {status}  </h6>
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
                </div>
            </div>
        </div>
    )
}

export default UserOrder