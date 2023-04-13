import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddSubBtn from './AddSubBtn'
import { useNavigate } from 'react-router-dom';

function AdminBases() {
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
            <h1>Set Bases Count</h1>
            <div className="AdminBases">
                <div className="base1">
                    <AddSubBtn custom="base1" val={val.base1} />
                    <h6>Cheese burst base</h6>
                </div>
                <div className="base2">
                    <AddSubBtn custom="base2" val={val.base2} />
                    <h6>Dough base</h6>
                </div>
                <div className="base3">
                    <AddSubBtn custom="base3" val={val.base3} />
                    <h6>Mini pizza base</h6>
                </div>
                <div className="base4">
                    <AddSubBtn custom="base4" val={val.base4} />
                    <h6>Plane base</h6>
                </div>
                <div className="base5">
                    <AddSubBtn custom="base5" val={val.base5} />
                    <h6>Thin crust base</h6>
                </div>
            </div>

        </div>
    )
}

export default AdminBases