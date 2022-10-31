import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar'

function Base() {
    let navigate = useNavigate();
    const [val, setVal] = useState({});
    const [disable, setdisable] = useState(true);
    const [showroot, setshowroot] = useState(false);
    const [base, setbase] = useState("");
    const [sauce, setsauce] = useState("");
    const [cheese, setcheese] = useState("");
    const [veggies, setveggies] = useState("");
    const [price, setprice] = useState(0);


    const username = localStorage.getItem("username");

    const [page, setpage] = useState({
        base: true,
        sauce: false,
        cheese: false,
        veggies: false
    })

    useEffect(() => {
        if (username === null) {
            navigate("/", { replace: true });
        }
        axios.get("http://localhost:4000/getcount")
            .then((res) => {
                setVal(res.data);
                console.log(res.data.base1);
            })
    }, [])


    function btnClick1() {
        setdisable(true);
        setpage({
            base: false,
            sauce: true,
            cheese: false,
            veggies: false
        })
    }
    function btnClick2() {
        setdisable(true);
        setpage({
            base: false,
            sauce: false,
            cheese: true,
            veggies: false
        })
    }
    function btnClick3() {
        setdisable(true);
        setpage({
            base: false,
            sauce: false,
            cheese: false,
            veggies: true
        })
    }

    function toroot() {
        const custompizza = { pizza: "Enjoy your Custom Pizza", username, base, sauce, cheese, veggies, totalPrice: price, quantity: 1 }
        axios.post("http://localhost:4000/custompizzacart", custompizza);

        navigate("../", { replace: true });
    }

    function handleClick(e) {

        const el = document.querySelectorAll('.baseimg');
        el.forEach((imgg) => {
            imgg.classList.remove('click-state');
        })
        e.target.classList.add("click-state");
    }

    function calcPrice() {
        switch (base) {
            case "CheeseBurst":
                setprice((prev) => prev + 155);
                axios.post("http://localhost:4000/minuscustom", { val: "base1" });
                break;
            case "Dough":
                setprice((prev) => prev + 145);
                axios.post("http://localhost:4000/minuscustom", { val: "base2" });
                break;
            case "MiniPizza":
                setprice((prev) => prev + 150);
                axios.post("http://localhost:4000/minuscustom", { val: "base3" });
                break;
            case "Plane":
                setprice((prev) => prev + 135);
                axios.post("http://localhost:4000/minuscustom", { val: "base4" });
                break;
            case "ThinCrust":
                setprice((prev) => prev + 125);
                axios.post("http://localhost:4000/minuscustom", { val: "base5" });
                break;
            default:
                console.log(base);
        }
        switch (sauce) {
            case "Buffalo":
                setprice((prev) => prev + 50);
                axios.post("http://localhost:4000/minuscustom", { val: "sauce1" });
                break;
            case "GarlicRanche":
                setprice((prev) => prev + 60);
                axios.post("http://localhost:4000/minuscustom", { val: "sauce2" });
                break;
            case "Hummus":
                setprice((prev) => prev + 75);
                axios.post("http://localhost:4000/minuscustom", { val: "sauce3" });
                break;
            case "Marinara":
                setprice((prev) => prev + 55);
                axios.post("http://localhost:4000/minuscustom", { val: "sauce4" });
                break;
            case "Pesto":
                setprice((prev) => prev + 60);
                axios.post("http://localhost:4000/minuscustom", { val: "sauce5" });
                break;
            default:
                console.log(sauce);
        }

        switch (cheese) {
            case "Mozzarella":
                setprice((prev) => prev + 50);
                axios.post("http://localhost:4000/minuscustom", { val: "cheese1" });
                break;
            case "Cheddar":
                setprice((prev) => prev + 35);
                axios.post("http://localhost:4000/minuscustom", { val: "cheese2" });
                break;
            default:
                console.log(cheese);
        }

        switch (veggies) {
            case "BellPeppers":
                setprice((prev) => prev + 55);
                axios.post("http://localhost:4000/minuscustom", { val: "veggies1" });
                break;
            case "EggPlant":
                setprice((prev) => prev + 45);
                axios.post("http://localhost:4000/minuscustom", { val: "veggies2" });
                break;
            case "YellowSquash":
                setprice((prev) => prev + 60);
                axios.post("http://localhost:4000/minuscustom", { val: "veggies3" });
                break;
            default:
                console.log(veggies);
        }
        setshowroot(true);
    }

    function navToHome() {
        navigate("../", { replace: true });
    }

    return (
        <div className='base'>
            <Navbar />
            <div className='CartPage'>
                {page.base &&
                    <div className=" basecontainer container">
                        <div className="row">
                            <div onClick={() => { setdisable(false); setbase("CheeseBurst") }} className="col-lg-4 col-md-6 basediv cheeseburst">
                                <img style={val.base1 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.base1 === 1 ? null : handleClick} className='baseimg' src="images/cheese burst base.jpg" alt="cheeseburst" />
                                <h4>Cheese burst base</h4>
                                {val.base1 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setbase("Dough") }} className="col-lg-4 col-md-6 basediv dough">
                                <img style={val.base2 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.base2 === 1 ? null : handleClick} className='baseimg' src="images/dough base.jpg" alt="dough" />
                                <h4>Dough base</h4>
                                {val.base2 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setbase("MiniPizza") }} className="col-lg-4 col-md-6 basediv minipizza">
                                <img style={val.base3 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.base3 === 1 ? null : handleClick} className='baseimg' src="images/mini pizza base.jpg" alt="minipizza" />
                                <h4>Mini pizza base</h4>
                                {val.base3 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div onClick={() => { setdisable(false); setbase("Plane") }} className="col-lg-4 col-md-6 basediv plane">
                                <img style={val.base4 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.base4 === 1 ? null : handleClick} className='baseimg' src="images/plane base.jpg" alt="plane" />
                                <h4>Plane base</h4>
                                {val.base4 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setbase("ThinCrust") }} className="col-lg-4 col-md-6 basediv thincrust">
                                <img style={val.base5 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.base5 === 1 ? null : handleClick} className='baseimg' src="images/thin crust base.jpg" alt="thincrust " />
                                <h4>Thin crust base</h4>
                                {val.base5 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                        </div>
                        <button disabled={disable} onClick={btnClick1} type="button" class="next btn btn-primary">Next</button>
                    </div>}
                {page.sauce &&
                    <div className="container sauce">
                        <div className="row">
                            <div onClick={() => { setdisable(false); setsauce("Buffalo") }} className="col-lg-4 col-md-6 basediv cheeseburst">
                                <img style={val.sauce1 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.sauce1 === 1 ? null : handleClick} className='baseimg' src="images/buffalo sauce.jpg" alt="buffalo sauce" />
                                <h4>Buffalo sauce</h4>
                                {val.sauce1 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setsauce("GarlicRanche") }} className="col-lg-4 col-md-6 basediv dough">
                                <img style={val.sauce2 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.sauce2 === 1 ? null : handleClick} className='baseimg' src="images/Garlic Ranche sauce.jpg" alt="Garlic Ranche sauce" />
                                <h4>Garlic Ranche sauce</h4>
                                {val.sauce2 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setsauce("Hummus") }} className="col-lg-4 col-md-6 basediv minipizza">
                                <img style={val.sauce3 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.sauce3 === 1 ? null : handleClick} className='baseimg' src="images/hummus sauce.jpg" alt="hummus sauce" />
                                <h4>Hummus sauce</h4>
                                {val.sauce3 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div onClick={() => { setdisable(false); setsauce("Marinara") }} className="col-lg-4 col-md-6 basediv plane">
                                <img style={val.sauce4 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.sauce4 === 1 ? null : handleClick} className='baseimg' src="images/marinara sauce.jpg" alt="marinara sauce" />
                                <h4>Marinara sauce</h4>
                                {val.sauce4 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setsauce("Pesto") }} className="col-lg-4 col-md-6 basediv thincrust">
                                <img style={val.sauce5 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.sauce5 === 1 ? null : handleClick} className='baseimg' src="images/Pesto sauce.jpg" alt="Pesto sauce " />
                                <h4>Pesto sauce</h4>
                                {val.sauce5 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                        </div>
                        <button disabled={disable} onClick={btnClick2} type="button" class="next btn btn-primary">Next</button>
                    </div>
                }
                {page.cheese &&
                    <div className="container sauce">
                        <div className="row">
                            <div onClick={() => { setdisable(false); setcheese("Mozzarella") }} className="col-lg-4 col-md-6 basediv plane">
                                <img style={val.cheese1 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.cheese1 === 1 ? null : handleClick} className='baseimg' src="images/mozzarella cheese.jpg" alt="mozzarella cheese " />
                                <h4>Mozzarella cheese</h4>
                                {val.cheese1 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setcheese("Cheddar") }} className="col-lg-4 col-md-6 basediv thincrust">
                                <img style={val.cheese2 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.cheese2 === 1 ? null : handleClick} className='baseimg' src="images/cheddar cheese.jpg" alt="Cheddar cheese " />
                                <h4>Cheddar cheese</h4>
                                {val.cheese2 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                        </div>
                        <button disabled={disable} onClick={btnClick3} type="button" class="next btn btn-primary">Next</button>
                    </div>
                }
                {page.veggies &&
                    <div className="container sauce">
                        <div className="row">
                            <div onClick={() => { setdisable(false); setveggies("BellPeppers") }} className="col-lg-4 col-md-6 basediv cheeseburst">
                                <img style={val.veggies1 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.veggies1 === 1 ? null : handleClick} className='baseimg' src="images/bell peppers.jpg" alt="bell peppers" />
                                <h4>Bell peppers</h4>
                                {val.veggies1 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setveggies("EggPlant") }} className="col-lg-4 col-md-6 basediv dough">
                                <img style={val.veggies2 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.veggies2 === 1 ? null : handleClick} className='baseimg' src="images/egg plant.jpg" alt="egg plant" />
                                <h4>Egg plant</h4>
                                {val.veggies2 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                            <div onClick={() => { setdisable(false); setveggies("YellowSquash") }} className="col-lg-4 col-md-6 basediv minipizza">
                                <img style={val.veggies3 === 1 ? { opacity: "0.3", cursor: "default" } : null} onClick={val.veggies3 === 1 ? null : handleClick} className='baseimg' src="images/yellow squash.jpg" alt="yellow squash" />
                                <h4>Yellow squash</h4>
                                {val.veggies3 === 1 ? <small style={{ color: "grey" }}>Out of Stock</small> : ""}
                            </div>
                        </div>
                        {showroot && <h5 className='customPrice'>Total Price : {price} Rs</h5>}

                        {showroot ? <button disabled={disable} type="button" onClick={toroot} class="next btn btn-primary">Add to cart</button> : <button type="button" onClick={calcPrice} class="next btn btn-primary">Next</button>}
                        {showroot && <button type="button" onClick={navToHome} class="cancelCustom next btn btn-danger">Cancel</button>}
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Base