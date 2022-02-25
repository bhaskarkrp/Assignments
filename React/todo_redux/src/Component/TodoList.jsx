import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getState, store } from '../Redux/store';
import styles from "../CSS/Input.module.css";

export const TodoList = () => {
    const [todoLists, setTodoLists] = React.useState([]);
    const { todo } = getState();

    const navigate = useNavigate();

    // console.log(todo);
    React.useEffect(() => {
        setTodoLists(todo);
        // console.log(todoLists)
    }, [todoLists, todo]);

    return (
        <div className={styles.todolist}>
            <h1>TodoList</h1>
            <ol>
                <li className={styles.li}>
                    <h3 className={styles.border1}>TODOS</h3>
                    <h3 className={styles.border1}>Owner</h3>
                    <h3 className={styles.border1}>Details</h3>
                </li>
                {
                    todoLists.map(todo => (
                        <>
                            <li className={styles.li}>
                                <h2>{todo.title}</h2>
                                <p>{todo.owner}</p>
                                <button className={styles.button} onClick={() => navigate(`todo/${todo.title}`)}>More..</button>
                            </li>
                        </>
                    ))
                }
            </ol>
        </div>
    )
}
