import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const CreateForm = () => {
    const [toAdd, setToAdd] = React.useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    // console.log(id)

    const onChangeHAndlers = (e) => {
        const { value, type, name } = e.target;
        // console.log(name, value)

        const data = {
            ...toAdd,
            [name]: value,
            id: id
        }
        setToAdd(data);
        // console.log(toAdd)
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/addresses", toAdd)
            .then(response => console.log(response.data));

        navigate("/");
    }
    return (
        <div>CreateForm
            <form action="" onSubmit={onSubmitHandler}>
                {/* <input type="number" value={id} disabled />
                <br /> */}
                <input type="text" name="floor" placeholder="Enter Flat number..." required onChange={onChangeHAndlers} />
                <br />
                <input type="text" name="street" placeholder="Enter street..." required onChange={onChangeHAndlers} />
                <br />
                <input type="text" name="landmark" placeholder="Enter Landmark.." onChange={onChangeHAndlers} />
                <br />
                <input type="text" name="area" placeholder="Enter Area'..." required onChange={onChangeHAndlers} />
                <br />
                <input type="text " name="city" placeholder="Enter City..." required onChange={onChangeHAndlers} />
                <br />
                {/* <input type="text" name="state" placeholder="Enter State..." required onChange={onChangeHAndlers} />
                <br /> */}
                <input type="number" name="pincode" placeholder="Enter Postal Code..." required onChange={onChangeHAndlers} />
                <br />
                <input type="submit" onSubmit={onSubmitHandler} />
            </form>
        </div>
    )
}
