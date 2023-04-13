import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Pizzacard(props) {
    const [pizzaCount, setPizzaCount] = useState(1);
    const [price, setPrice] = useState(Number(props.price));
    const [ops, setops] = useState("");

    const username = localStorage.getItem("username");

    function handleClick(e) {
        if (e.target.className === "plus") {
            if (pizzaCount == 9) return;
            setPizzaCount((prev) => prev + 1);
            setops("+");
        } else if (e.target.className === "minus") {
            if (pizzaCount == 1) return;
            setPizzaCount((prev) => prev - 1);
            setops("-");
        }

    }

    useEffect(() => {
        if (ops === "+") {
            setPrice((prev) => { return (prev + Number(props.price)) })

        } else if (ops === "-") {
            setPrice((prev) => { return (prev - Number(props.price)) });
        }

    }, [pizzaCount]);

    function btnClick() {

        const order = { username, pizza: props.name, quantity: pizzaCount, totalPrice: price };
        alert("Added to Cart.");
        axios.post("https://ovenpizza-backend.onrender.com/userorder", order)
            .then((res) => {
                console.log(res.data);
            })
    }

    function aletrUser() {
        alert("Please, first Login.");
    }

    return (
        <div className=' pizzacard'>
            <div className="card" style={{ width: "27vw" }}>
                <img className="pizzaimg card-img-top" src={props.img} alt="Card cap" />
                <div className="card-body">
                    <p className="card-text"><img className='vegicon' src="images/vegicon.png" alt="veg-icon" /> <span className='pizzaname'>{props.name}</span></p>
                    <small class="card-subtitle mb-2 text-muted">{props.detail}</small>
                    <div class="price">
                        <div class="pricenum">{price}</div>
                        <div class="buttons">
                            <div class="plusminus">
                                <span onClick={handleClick} name="minus" class="minus" >
                                    —
                                </span>
                                {pizzaCount}
                                <span onClick={handleClick} name='plus' class="plus">
                                    +
                                </span>
                            </div>

                        </div>
                        <button style={{ backgroundColor: username === null ? "grey" : null }} onClick={username === null ? aletrUser : btnClick} className="add">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizzacard