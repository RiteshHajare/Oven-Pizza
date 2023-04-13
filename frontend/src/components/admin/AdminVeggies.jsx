import React, { useEffect, useState } from 'react'
import AddSubBtn from './AddSubBtn'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminVeggies() {
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
            <h1>Set Veggies Count</h1>
            <div className="AdminBases">
                <div className="base1">
                    <AddSubBtn custom="veggies1" val={val.veggies1} />
                    <h6>Bell peppers</h6>
                </div>
                <div className="base2">
                    <AddSubBtn custom="veggies2" val={val.veggies2} />
                    <h6>Egg plant</h6>
                </div>
                <div className="base3">
                    <AddSubBtn custom="veggies3" val={val.veggies3} />
                    <h6>Yellow squash</h6>
                </div>

            </div>

        </div>
    )
}

export default AdminVeggies