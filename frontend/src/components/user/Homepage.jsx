// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar'
import Pizzacard from './Pizzacard'
import Pizzas from './Pizzas'

function Homepage() {

    const user = localStorage.getItem("username");
    const [err, seterr] = useState(false);
    const [input, setInput] = useState("");

    let navigate = useNavigate();

    function handleClick() {
        if (user === null) {
            seterr(true);
            return;
        }
        navigate("../base", { replace: true });
    }


    function mapArr(obj) {
        return (
            <Pizzacard name={obj.name} detail={obj.detail} price={obj.price} img={obj.img} />
        )
    }

    function inputt(input) {
        setInput(input);
    }

    return (
        <div className='homepage'>
            <Navbar inputt={inputt} />
            <div className="container">
                <button type="button" onClick={handleClick} class="mkpizza btn btn-primary">Make your own pizza</button>
                {err && <p className='needtolog'>You need to login first.</p>}
                <h3 className='or'><span>OR</span></h3>
                <h1 className='selecthere'>Available Pizza...</h1>
                <div className='trial'>

                    {Pizzas.filter((obj) => {
                        if (input === "") {
                            return obj;
                        } else if (obj.name.toLowerCase().includes(input.toLowerCase())) {
                            return obj;
                        }
                    }).map(mapArr)}

                    {/* <Pizzacard name={"Double Cheese Margherita [BIG 10'']"} detail={"Good Ol' Classic | Serves 2-3."} price={" 345"} img={"images/pizzas/p8.jpg"} />


                    <Pizzacard name={"Any 2 Big 10' Pizzas [Get ₹75 Credits Back]"} detail={"Mushroom | Black Olive | Spicy Jalapeno "} price={" 695"} img={"images/pizzas/p5.jpg"} />


                    <Pizzacard name={"Any 2 Big 10' Pizzas + Any 2 Desserts"} detail={"Mushroom | Black Olive | Spicy Jalapeno"} price={"670"} img={"images/pizzas/p3.jpg"} />




                    <Pizzacard name={"Farmer's Market [BIG 10'']"} detail={"Capsicum | Onion | Serves 2-3."} price={" 345"} img={"images/pizzas/p4.jpg"} />


                    <Pizzacard name={"Awesome Threesome [BIG 10'']"} detail={"Black Olive | Golden Corn | Capsicum | Serves 2-3."} price={" 425"} img={"images/pizzas/p2.jpg"} />


                    <Pizzacard name={"Spicy Mexicano [BIG 10'']"} detail={"Red Paprika | Spicy Jalapeno | Golden Corn "} price={"655"} img={"images/pizzas/p6.jpg"} />




                    <Pizzacard name={"Magic Mushrooms [BIG 10'']"} detail={"Mushroom | Capsicum | Tomato | Serves 2-3."} price={"400"} img={"images/pizzas/p7.jpg"} />


                    <Pizzacard name={"Veggie Paradise [BIG 10'']"} detail={"Black Olive | Red Paprika | Capsicum | Tomato"} price={"485"} img={"images/pizzas/p1.jpg"} />
                    <Pizzacard name={"Super large veg Magis pizza"} detail={"Capsicum | Onion | Capsicum | Serves 2-3"} price={"600"} img={"images/pizzas/p9.jpg"} /> */}


                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Homepage