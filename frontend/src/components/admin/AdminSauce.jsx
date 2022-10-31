import React, { useEffect, useState } from 'react'
import AddSubBtn from './AddSubBtn'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminSauce() {
    const [val, setVal] = useState({});
    const user = localStorage.getItem("username");
    let navigate = useNavigate();

    useEffect(() => {
        if (user != "Ritesh") {
            navigate("../login", { replace: true });
        }
        axios.get("http://localhost:4000/getcount")
            .then((res) => {
                setVal(res.data);
                // console.log(res.data.base1);
            })
    }, [])


    return (
        <div className='basses container'>
            <h1>Set Sause Count</h1>
            <div className="AdminBases">
                <div className="base1">
                    <AddSubBtn custom="sauce1" val={val.sauce1} />
                    <h6>Buffalo sauce</h6>
                </div>
                <div className="base2">
                    <AddSubBtn custom="sauce2" val={val.sauce2} />
                    <h6>Garlic Ranche sauce</h6>
                </div>
                <div className="base3">
                    <AddSubBtn custom="sauce3" val={val.sauce3} />
                    <h6>Hummus sauce</h6>
                </div>
                <div className="base4">
                    <AddSubBtn custom="sauce4" val={val.sauce4} />
                    <h6>Marinara sauce</h6>
                </div>
                <div className="base5">
                    <AddSubBtn custom="sauce5" val={val.sauce5} />
                    <h6>Pesto sauce</h6>
                </div>
            </div>

        </div>
    )
}

export default AdminSauce