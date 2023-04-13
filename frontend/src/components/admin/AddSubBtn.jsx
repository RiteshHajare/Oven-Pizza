import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddSubBtn(props) {
    const [pizzaCount, setPizzaCount] = useState(0);

    useEffect(() => {
        if (props.val !== "undefined") {
            setPizzaCount(props.val);
            // console.log(props.val);
        }
    }, [props.val])


    function handleClick(e) {
        if (e.target.className === "adminplus") {
            console.log(pizzaCount + 1);
            setPizzaCount((prev) => prev + 1);
            const obj = { pizzaCount: pizzaCount + 1, custom: props.custom };
            axios.post("http://localhost:4000/changecustomitems", obj);
        } else if (e.target.className === "adminminus") {
            if (pizzaCount == 1) return;
            console.log(pizzaCount - 1);
            setPizzaCount((prev) => prev - 1);
            const obj = { pizzaCount: pizzaCount - 1, custom: props.custom };
            axios.post("http://localhost:4000/changecustomitems", obj);
        }




    }
    return (
        <div>
            <div class="card btns">
                <div class="adminplusminus ">
                    <span onClick={handleClick} name="minus" className="adminminus" >
                        —
                    </span>
                    {pizzaCount==0? props.val:pizzaCount}
                    <span onClick={handleClick} name='plus' className="adminplus">
                        +
                    </span>
                </div>

            </div>
        </div>
    )
}

export default AddSubBtn