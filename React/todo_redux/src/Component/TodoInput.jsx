import React from 'react';
import { TodoList } from './TodoList';
import { addTodo } from '../Redux/action';
import { dispatch, getState } from '../Redux/store';
import styles from '../CSS/Input.module.css';

export const TodoInput = () => {
    const [task, setTask] = React.useState("");
    const [owner, setOwner] = React.useState("");

    // console.log(dispatch(addTodo(task, owner)));
    const { todo } = getState();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task != "" && owner != "") {
            dispatch(addTodo(task, owner));
            setTask("");
            setOwner("");
            // console.log(getState());
        } else {
            alert("Fill the TODOS")
        }
    }
    return (
        <div>
            <div className={styles.container}>
                <form action="">
                    <div className={styles.div_input}>
                        <label >Enter Your TODOS : </label>
                        <input type="text" placeholder="Enter your TODOS" value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>

                    <div>
                        <label >Enter Owner : </label>
                        <input type="text" placeholder="Enter your TODOS" value={owner} onChange={(e) => setOwner(e.target.value)} />
                    </div>

                    <input type="submit" value="Submit" onClick={handleSubmit} className={styles.button} />


                </form>
            </div>

            {todo.length > 0 ? <TodoList /> : null}
        </div>
    )
}


