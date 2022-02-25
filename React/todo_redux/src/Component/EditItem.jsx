import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addTodo, editTodo } from '../Redux/action';
import { dispatch } from '../Redux/store';

export const EditItem = () => {

    const params = useParams();
    // console.log(params)
    const [task, setTask] = React.useState(params.id);
    const [owner, setOwner] = React.useState("");

    // console.log(dispatch(addTodo(task, owner)));
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task != "" && owner != "") {
            dispatch(editTodo(task, owner));
            alert("TODO Updated")
            navigate("/")
            // console.log(getState());
        } else {
            alert("Fill the TODOS")
        }
    }
    return (
        <div>Home
            <div>
                <form action="">
                    <div>
                        <label >Enter Your TODOS : </label>
                        <input type="text" placeholder="Enter your TODOS" disabled="disabled" value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>

                    <div>
                        <label >Enter Owner Name : </label>
                        <input type="text" placeholder="Enter your TODOS" value={owner} onChange={(e) => setOwner(e.target.value)} />
                    </div>

                    <input type="submit" value="Submit" onClick={handleSubmit} />


                </form>
            </div>
        </div>
    )
}
