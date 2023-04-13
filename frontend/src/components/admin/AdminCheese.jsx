import React, { useEffect, useState } from 'react'
import AddSubBtn from './AddSubBtn'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminCheese() {
    const [val, setVal] = useState({});
    const user = localStorage.getItem("username");
    let navigate = useNavigate();

    useEffect(() => {
        if (user != "Ritesh") {
            navigate("../login", { replace: true });
        }
        axios.get("https://ovenpizza-backend.onrender.com/getcount")
            .then((res) => {
                setVal(res.data);
                // console.log(res.data.base1);
            })
    }, [])



    return (
        <div className='basses container'>
            <h1>Set Cheese Count</h1>
            <div className="AdminBases">
                <div className="base1">
                    <AddSubBtn custom="cheese1" val={val.cheese1} />
                    <h6>Mozzarella cheese</h6>
                </div>
                <div className="base2">
                    <AddSubBtn custom="cheese2" val={val.cheese2} />
                    <h6>Cheddar cheese</h6>
                </div>

            </div>

        </div>
    )
}

export default AdminCheese